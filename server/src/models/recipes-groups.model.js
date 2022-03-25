// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const recipesGroups = sequelizeClient.define('recipesGroups', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
  recipesGroups.associate = function (models) {
    try {
      const {
        recipes,
      } = models;

      recipesGroups.hasMany(recipes, {
        foreignKey: 'recipesGroupId',
        as: 'recipes',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return recipesGroups;
};
