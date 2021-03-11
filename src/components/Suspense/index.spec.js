import { makeRenderComponent } from 'testHelpers';
import { Suspense } from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Suspense: (props) => <x-react-suspense {...props} />,
}));

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Suspense,
  defaultProps,
});

describe('<Suspense/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-react-suspense
        fallback="[object Object]"
      >
        CHILDREN
      </x-react-suspense>
    `);
  });
});
