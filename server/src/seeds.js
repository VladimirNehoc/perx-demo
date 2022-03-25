/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const _ = require('lodash');

const seedData = require('./test-data');

module.exports = async (app) => {
  const sequelize = app.get('sequelizeClient');

  const { models } = sequelize;

  for (const data of seedData) {
    const { table } = data;
    const items = data.items || [];

    console.log(`start generate ${table}`);

    for (const item of items) {
      try {
        const result = await models[table].create(item);

        console.log(`Created ${table} - ${result.id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
