// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const ingredients = sequelizeClient.define('ingredients', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  ingredients.associate = function (models) {
    try {
      const {
        ingredientsGroups,
      } = models;

      ingredients.belongsTo(ingredientsGroups, {
        foreignKey: {
          name: 'ingredientsGroupId',
          allowNull: false,
        },
        as: 'ingredientsGroup',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return ingredients;
};
