import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

jest.mock('./Helmet', () => ({
  Provider: (props) => <x-helmet-provider {...props} />,
}));

jest.mock('./Snood', () => ({
  Provider: (props) => <x-snood-provider {...props} />,
}));

const defaultProps = { children: 'CHILDREN' };

const renderComponent = makeRenderComponent({
  component: PublicApi.Providers,
  defaultProps,
});

describe('the Providers component', () => {
  test('exports only the allowed exports', () => {
    const allowedExports = ['Providers'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-helmet-provider>
        <x-snood-provider>
          CHILDREN
        </x-snood-provider>
      </x-helmet-provider>
    `);
  });
});
