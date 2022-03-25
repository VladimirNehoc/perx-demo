const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const recipesIngredients = sequelizeClient.define('recipesIngredients', {
    count: {
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
  recipesIngredients.associate = function (models) {
    try {
      const {
        recipes,
        ingredients,
        units,
      } = models;

      recipes.belongsToMany(ingredients, {
        as: 'ingredients',
        through: 'recipesIngredients',
        foreignKey: 'recipeId',
      });

      ingredients.belongsToMany(recipes, {
        as: 'recipes',
        through: 'recipesIngredients',
        foreignKey: 'ingredientId',
      });

      recipesIngredients.belongsTo(units, { foreignKey: 'unitId', as: 'unit' });
    } catch (error) {
      console.log(error.message);
    }
  };

  return recipesIngredients;
};
