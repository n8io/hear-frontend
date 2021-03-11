import { makeRenderComponent } from 'testHelpers';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Home } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('components/PageTitle', () => ({
  PageTitle: (props) => <x-page-title {...props} />,
}));

jest.mock('utils/hydrateRoute');

const renderComponent = makeRenderComponent({
  component: Home,
});

describe('<Home/>', () => {
  beforeEach(() => {
    hydrateRoute.mockImplementation(
      (route, params) => `hydrateRoute(${route}, ${JSON.stringify(params)})`
    );
  });

  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      <div>
        <x-page-title
          title="Subreddits"
        />
        <p>
          <x-rrd-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"meme\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"meme"})
          </x-rrd-link>
        </p>
        <p>
          <x-rrd-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"technology\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"technology"})
          </x-rrd-link>
        </p>
        <p>
          <x-rrd-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"tesla\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"tesla"})
          </x-rrd-link>
        </p>
        <p>
          <x-rrd-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"unpopularopinion\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"unpopularopinion"})
          </x-rrd-link>
        </p>
      </div>
    `);
  });
});
