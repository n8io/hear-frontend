import { makeRenderComponent } from 'testHelpers';
import { App } from '.';

jest.mock('components/ErrorBoundary', () => ({
  ErrorBoundary: (props) => <x-error-boundary {...props} />,
}));

jest.mock('components/Suspense', () => ({
  Suspense: (props) => <x-suspense {...props} />,
}));

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
      <x-error-boundary>
        <x-providers>
          <x-global-styles />
          <x-routes />
        </x-providers>
      </x-error-boundary>
    `);
  });
});
