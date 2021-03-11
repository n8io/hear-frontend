import { useParams } from 'react-router-dom';
import { makeRenderComponent } from 'testHelpers';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Post } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
  useParams: jest.fn(),
}));

jest.mock('components/PageTitle', () => ({
  PageTitle: (props) => <x-page-title {...props} />,
}));

jest.mock('utils/hydrateRoute');

const subredditId = 'SUBREDDIT_ID';
const viewType = 'VIEW_TYPE';

const renderComponent = makeRenderComponent({
  component: Post,
});

describe('<Post/>', () => {
  beforeEach(() => {
    useParams.mockReturnValue({
      subredditId,
      viewType,
    });

    hydrateRoute.mockImplementation(
      (route, params) => `hydrateRoute(${route}, ${JSON.stringify(params)})`
    );
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-page-title
        title="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"SUBREDDIT_ID\\"}) [undefined]"
      >
        hydrateRoute(/r/:subredditId, {"subredditId":"SUBREDDIT_ID"})
      </x-page-title>
    `);
  });
});
