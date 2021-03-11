import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { ErrorBoundary } = PublicApi;

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: ErrorBoundary,
  defaultProps,
});

describe('<ErrorBoundary/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`CHILDREN`);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['ErrorBoundary'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
