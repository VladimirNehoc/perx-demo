// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const units = sequelizeClient.define('units', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    variants: {
      type: DataTypes.ARRAY(Sequelize.TEXT),
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  // eslint-disable-next-line no-unused-vars
  units.associate = function (models) {
    try {
      const {
        recipesIngredients,
      } = models;

      units.hasMany(recipesIngredients, {
        foreignKey: 'unitId',
        as: 'recipesIngredients',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return units;
};
