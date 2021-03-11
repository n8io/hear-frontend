import * as PublicApi from '.';

describe('<NotFound />', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['NotFound'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
