import { makeRenderComponent } from 'testHelpers';
import { Routing } from '.';

jest.mock('react-router-dom', () => ({
  Redirect: (props) => <x-rrd-redirect {...props} />,
  Route: (props) => <x-rrd-route {...props} />,
  Switch: (props) => <x-rrd-switch {...props} />,
}));

jest.mock('../Post', () => ({
  Post: (props) => <x-post {...props} />,
}));

jest.mock('../Posts', () => ({
  Posts: (props) => <x-posts {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: Routing,
});

describe('<Routing/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-switch>
        <x-rrd-route
          exact="true"
          path="/r/:subredditId/posts/:postId"
        />
        <x-rrd-route
          exact="true"
          path="/r/:subredditId/:viewType"
        />
        <x-rrd-redirect
          to="/r/:subredditId/new"
        />
      </x-rrd-switch>
    `);
  });
});
