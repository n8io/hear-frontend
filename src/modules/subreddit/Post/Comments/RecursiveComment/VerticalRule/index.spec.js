import { makeRenderComponent } from 'testHelpers';
import { VerticalRule } from '.';

const renderComponent = makeRenderComponent({
  component: VerticalRule,
});

describe('<VerticalRule/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        border-left: 1px solid var(--color-gray-200);
        height: 100%;
        width: 1px;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
