import { useParams } from 'react-router-dom';
import { makeRenderComponent } from 'testHelpers';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Post } from '.';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
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
      <x-page-content>
        <x-page-title
          title="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"SUBREDDIT_ID\\"}) [undefined]"
        >
          <x-link
            to="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"SUBREDDIT_ID\\"})"
          >
            hydrateRoute(/r/:subredditId, {"subredditId":"SUBREDDIT_ID"})
          </x-link>
        </x-page-title>
        hydrateRoute(/r/:subredditId/posts/:postId, {"subredditId":"SUBREDDIT_ID"})
      </x-page-content>
    `);
  });
});
