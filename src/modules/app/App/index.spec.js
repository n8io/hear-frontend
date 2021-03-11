import { makeRenderComponent } from 'testHelpers';
import { App } from '.';

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
        <x-routes />
      </x-providers>
    `);
  });
});
