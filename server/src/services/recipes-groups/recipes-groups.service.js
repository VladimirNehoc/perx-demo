// Initializes the `recipesGroups` service on path `/recipes-groups`
const { RecipesGroups } = require('./recipes-groups.class');
const createModel = require('../../models/recipes-groups.model');
const hooks = require('./recipes-groups.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/recipes-groups', new RecipesGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recipes-groups');

  service.hooks(hooks);
};
