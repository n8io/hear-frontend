import * as PublicApi from '.';

describe('the Home component', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['Home'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
