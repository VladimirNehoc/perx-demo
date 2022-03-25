const recipes = require('./recipes/recipes.service');
const steps = require('./steps/steps.service');
const recipesGroups = require('./recipes-groups/recipes-groups.service');
const difficulties = require('./difficulties/difficulties.service');
const recipesIngredients = require('./recipes-ingredients/recipes-ingredients.service');
const ingredients = require('./ingredients/ingredients.service');
const units = require('./units/units.service');
const ingredientsGroups = require('./ingredients-groups/ingredients-groups.service');

const customServices = require('./customServices');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(recipes);
  app.configure(steps);
  app.configure(recipesGroups);
  app.configure(difficulties);
  app.configure(recipesIngredients);
  app.configure(ingredients);
  app.configure(units);
  app.configure(ingredientsGroups);

  app.configure(customServices);
};
