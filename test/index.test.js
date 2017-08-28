const simpleComponent = require('./fixtures/simpleComponent');

test('ast is not null', () => {
  expect(typeof simpleComponent).toBe('object');
})