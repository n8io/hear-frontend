import { makeRenderComponent } from 'testHelpers';
import { Routes } from '.';

jest.mock('react-router-dom', () => ({
  BrowserRouter: (props) => <x-rrd-router {...props} />,
  Redirect: (props) => <x-rrd-redirect {...props} />,
  Route: (props) => <x-rrd-route {...props} />,
  Switch: (props) => <x-rrd-switch {...props} />,
}));

jest.mock('modules/Subreddit', () => ({
  Subreddit: (props) => <x-subreddit {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: Routes,
});

describe('<Routes/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-router>
        <x-rrd-switch>
          <x-rrd-route
            exact="true"
            path="/r/unpopularopinion"
          />
          <x-rrd-redirect
            to="/r/unpopularopinion"
          />
        </x-rrd-switch>
      </x-rrd-router>
    `);
  });
});
