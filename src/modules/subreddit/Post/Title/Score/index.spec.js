import { makeRenderComponent } from 'testHelpers';
import { Score } from '.';

const defaultProps = { score: 1233465 };

const renderComponent = makeRenderComponent({
  component: Score,
  defaultProps,
});

describe('<Score/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-family: Arial,sans-serif;
        font-size: 1.125rem;
      }

      <span
        class="c0"
      >
        1.2M
      </span>
    `);
  });
});
