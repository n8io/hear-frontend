import { makeRenderComponent } from 'testHelpers';
import { Main } from '.';

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

      <main
        class="c0"
      >
        CHILDREN
      </main>
    `);
  });
});
