import * as PublicApi from '.';

describe('<Subreddit />', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['Subreddit'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
