// Initializes the `units` service on path `/units`
const { Units } = require('./units.class');
const createModel = require('../../models/units.model');
const hooks = require('./units.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/units', new Units(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('units');

  service.hooks(hooks);
};
