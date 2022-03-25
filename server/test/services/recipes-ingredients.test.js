const app = require('../../src/app');

describe('\'recipesIngredients\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipes-ingredients');
    expect(service).toBeTruthy();
  });
});
