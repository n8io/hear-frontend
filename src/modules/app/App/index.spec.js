import { makeRenderComponent } from 'testHelpers';
import { App } from '.';

jest.mock('components/Page', () => ({
  Page: (props) => <x-page {...props} />,
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
      <x-page>
        <x-routes />
      </x-page>
    `);
  });
});
