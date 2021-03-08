import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Page } = PublicApi;

jest.mock('components/Layout', () => ({
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
