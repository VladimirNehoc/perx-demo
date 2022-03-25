module.exports = async (context) => {
  try {
    const {
      params,
    } = context;

    const { scope } = params.query;

    if (!scope) return context;

    delete params.query.scope;

    context.params.sequelize = {
      ...context.params.sequelize,
      scope,
      raw: false,
    };

    return context;
  } catch (error) {
    console.log(error.message);
  }

  return context;
};
