const app = require('../../src/app');

describe('\'recipesGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipes-groups');
    expect(service).toBeTruthy();
  });
});
