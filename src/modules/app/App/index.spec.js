import { makeRenderComponent } from 'testHelpers';
import { App } from '.';

jest.mock('./GlobalStyles', () => ({
  GlobalStyles: (props) => <x-global-styles {...props} />,
}));

jest.mock('./Providers', () => ({
  Providers: (props) => <x-providers {...props} />,
}));

jest.mock('./Routes', () => ({
  Routes: (props) => <x-routes {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: App,
});

describe('<App/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-providers>
        <x-global-styles />
        <x-routes />
      </x-providers>
    `);
  });
});
