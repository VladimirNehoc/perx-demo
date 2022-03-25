// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const ingredientsGroups = sequelizeClient.define('ingredientsGroups', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
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
  ingredientsGroups.associate = function (models) {
    try {
      const {
        ingredients,
      } = models;

      ingredientsGroups.hasMany(ingredients, {
        foreignKey: 'ingredientsGroupId',
        as: 'ingredients',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return ingredientsGroups;
};
