import * as PublicApi from '.';

describe('the Layout component', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['Layout', 'Main'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
