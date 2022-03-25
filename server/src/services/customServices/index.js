const getAll = require('./recipes/getAll.service');

module.exports = function (app) {
  app.configure(getAll);
};
