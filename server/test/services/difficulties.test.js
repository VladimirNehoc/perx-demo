const app = require('../../src/app');

describe('\'difficulties\' service', () => {
  it('registered the service', () => {
    const service = app.service('difficulties');
    expect(service).toBeTruthy();
  });
});
