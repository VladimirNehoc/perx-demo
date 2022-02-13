const _ = require('lodash');

module.exports.getWhereString = (str) => {
  const items = _.split(str, ',');

  const itemsStringArray = _.map(items, (item) => `'${item}'`);

  return _.join(itemsStringArray, ', ');
};
