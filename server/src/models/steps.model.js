// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const steps = sequelizeClient.define('steps', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    imageId: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  // eslint-disable-next-line no-unused-vars
  steps.associate = function (models) {
    try {
      const {
        recipes,
      } = models;

      steps.belongsTo(recipes, {
        foreignKey: {
          name: 'recipeId',
          allowNull: false,
        },
        as: 'recipe',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return steps;
};
