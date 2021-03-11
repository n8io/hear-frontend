import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Link } = PublicApi;

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

const defaultProps = {
  children: 'CHILDREN',
  to: '/TO',
};

const renderComponent = makeRenderComponent({
  component: Link,
  defaultProps,
});

describe('<Link/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-link
        classname="sc-bdfBwQ bFnbAU"
        to="/TO"
      >
        CHILDREN
      </x-rrd-link>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Link'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
