import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Page } = PublicApi;

jest.mock('react-helmet-async', () => ({
  Helmet: (props) => <x-react-helmet-async {...props} />,
}));

jest.mock('components/Layout', () => ({
  Header: (props) => <x-layout-header {...props} />,
  Main: (props) => <x-layout-layout {...props} />,
}));

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Page,
  defaultProps,
});

describe('<Page/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-react-helmet-async>
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
      </x-react-helmet-async>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Page'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
