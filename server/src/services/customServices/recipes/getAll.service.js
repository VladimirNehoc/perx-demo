module.exports = function (app) {
  const service = {
    async find() {
      try {
        const { models } = app.get('sequelizeClient');

        const result = models.recipes.findAll({
          include: { all: true, nested: true },
        });

        return result;
      } catch (error) {
        return error.message;
      }
    },
  };

  app.use('/getAll', service);
};
