import { makeRenderComponent } from 'testHelpers';
import { Main } from '.';

jest.mock('components/Suspense', () => ({
  Suspense: (props) => <x-suspense {...props} />,
}));

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Main,
  defaultProps,
});

describe('<Main/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 1rem;
      }

      @media screen and (min-width:64rem) {
        .c0 {
          max-width: 64rem;
          margin: 1rem auto;
        }
      }

      <main
        class="c0"
      >
        <x-suspense>
          CHILDREN
        </x-suspense>
      </main>
    `);
  });
});
