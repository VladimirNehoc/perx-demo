// Initializes the `ingredientsGroups` service on path `/ingredients-groups`
const { IngredientsGroups } = require('./ingredients-groups.class');
const createModel = require('../../models/ingredients-groups.model');
const hooks = require('./ingredients-groups.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/ingredients-groups', new IngredientsGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ingredients-groups');

  service.hooks(hooks);
};
