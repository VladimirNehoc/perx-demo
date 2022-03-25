const Sequelize = require('sequelize');

const cls = require('cls-hooked');
const generateSeeds = require('./seeds');

const namespace = cls.createNamespace('yum_postgres_namespace');

Sequelize.useCLS(namespace);

module.exports = (app) => {
  const connectionString = app.get('postgres');

  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,
      paranoid: true,
    },
  });

  const oldSetup = app.setup();

  app.set('sequelizeClient', sequelize);

  app.setup = async () => {
    const result = oldSetup;

    // Set up data relationships
    const { models } = sequelize;

    Object.keys(models).forEach((name) => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    const databaseSync = await sequelize.sync({ force: true, alter: true });

    // Sync to the database
    app.set('sequelizeSync', databaseSync);

    await generateSeeds(app);

    return result;
  };
};
