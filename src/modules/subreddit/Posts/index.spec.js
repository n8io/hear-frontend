import { useParams } from 'react-router-dom';
import { makeRenderComponent } from 'testHelpers';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Posts } from '.';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('components/Link', () => ({
  Link: (props) => <x-link {...props} />,
}));

jest.mock('components/Muted', () => ({
  Muted: (props) => <x-muted {...props} />,
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
  component: Posts,
});

describe('<Posts/>', () => {
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
          title="hydrateRoute(/r/:subredditId, {\\"subredditId\\":\\"SUBREDDIT_ID\\"})"
        >
          hydrateRoute(/r/:subredditId, {"subredditId":"SUBREDDIT_ID"})
          <x-muted
            level="5"
          >
            /
            VIEW_TYPE
          </x-muted>
        </x-page-title>
        <x-link
          to="hydrateRoute(/r/:subredditId/posts/:postId, {\\"subredditId\\":\\"SUBREDDIT_ID\\",\\"viewType\\":\\"VIEW_TYPE\\",\\"postId\\":\\"abc123\\"})"
        >
          hydrateRoute(/r/:subredditId/posts/:postId, {"subredditId":"SUBREDDIT_ID","viewType":"VIEW_TYPE","postId":"abc123"})
        </x-link>
      </x-page-content>
    `);
  });
});
