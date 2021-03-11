import { makeRenderComponent } from 'testHelpers';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Home } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('components/Link', () => ({
  Link: (props) => <x-link {...props} />,
}));

jest.mock('components/PageContent', () => ({
  PageContent: (props) => <x-page-content {...props} />,
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
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-page-content>
        <x-page-title
          title="My Subreddits"
        />
        <p>
          <x-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"unpopularopinion\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"unpopularopinion"})
          </x-link>
        </p>
      </x-page-content>
    `);
  });
});
