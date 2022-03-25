const app = require('../../src/app');

describe('\'units\' service', () => {
  it('registered the service', () => {
    const service = app.service('units');
    expect(service).toBeTruthy();
  });
});
