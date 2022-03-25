// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');

const { DataTypes } = Sequelize;

module.exports = (app) => {
  const sequelizeClient = app.get('sequelizeClient');

  const recipes = sequelizeClient.define('recipes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proteins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    carbohydrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fats: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imageId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    requiredTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  recipes.addScope('all', {
    include: { all: true, nested: true },
  });

  recipes.addScope('withSteps', {
    include: 'steps',
  });

  // eslint-disable-next-line no-unused-vars
  recipes.associate = (models) => {
    try {
      const {
        recipesGroups,
        difficulties,
        steps,
      } = models;

      recipes.belongsTo(recipesGroups, {
        foreignKey: {
          name: 'recipesGroupId',
          allowNull: true,
        },
        as: 'recipesGroup',
      });

      recipes.belongsTo(difficulties, {
        foreignKey: {
          name: 'difficultId',
          allowNull: true,
        },
        as: 'difficult',
      });

      recipes.hasMany(steps, {
        foreignKey: 'recipeId',
        as: 'steps',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return recipes;
};
