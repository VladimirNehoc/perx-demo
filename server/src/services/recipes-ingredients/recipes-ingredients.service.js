// Initializes the `recipesIngredients` service on path `/recipes-ingredients`
const { RecipesIngredients } = require('./recipes-ingredients.class');
const createModel = require('../../models/recipes-ingredients.model');
const hooks = require('./recipes-ingredients.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/recipes-ingredients', new RecipesIngredients(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recipes-ingredients');

  service.hooks(hooks);
};
