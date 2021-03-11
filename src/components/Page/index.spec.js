import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Page } = PublicApi;

jest.mock('react-helmet-async', () => ({
  Helmet: (props) => <x-react-helmet-async {...props} />,
}));

jest.mock('components/Layout', () => ({
  Header: (props) => <x-layout-header {...props} />,
  Layout: (props) => <x-layout-main {...props} />,
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
      <x-layout-main>
        <x-react-helmet-async>
          <link
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
        </x-react-helmet-async>
        <x-layout-header />
        <x-layout-layout>
          CHILDREN
        </x-layout-layout>
      </x-layout-main>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Page'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
