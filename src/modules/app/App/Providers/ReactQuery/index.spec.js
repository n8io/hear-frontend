import * as PublicApi from '.';

describe('the React Query provider', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['Provider'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
