const app = require('../../src/app');

describe('\'ingredientsGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('ingredients-groups');
    expect(service).toBeTruthy();
  });
});
