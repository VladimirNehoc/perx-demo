// Initializes the `difficulties` service on path `/difficulties`
const { Difficulties } = require('./difficulties.class');
const createModel = require('../../models/difficulties.model');
const hooks = require('./difficulties.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/difficulties', new Difficulties(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('difficulties');

  service.hooks(hooks);
};
