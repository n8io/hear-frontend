import { makeRenderComponent } from 'testHelpers';
import { Routes } from '.';

jest.mock('react-router-dom', () => ({
  BrowserRouter: (props) => <x-rrd-browser-router {...props} />,
  Route: (props) => <x-rrd-route {...props} />,
  Switch: (props) => <x-rrd-switch {...props} />,
}));

jest.mock('components/Page', () => ({
  Page: (props) => <x-page {...props} />,
}));

jest.mock('modules/home', () => ({
  Home: (props) => <x-home {...props} />,
}));

jest.mock('modules/notFound', () => ({
  NotFound: (props) => <x-not-found {...props} />,
}));

jest.mock('modules/subreddit', () => ({
  Subreddit: (props) => <x-subreddit {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: Routes,
});

describe('<Routes/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-browser-router>
        <x-page>
          <x-rrd-switch>
            <x-rrd-route
              exact="true"
              path="/"
            />
            <x-rrd-route
              path="/r/:subredditId"
            />
            <x-rrd-route
              path="*"
            />
          </x-rrd-switch>
        </x-page>
      </x-rrd-browser-router>
    `);
  });
});
