import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Muted } = PublicApi;

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Muted,
  defaultProps,
});

describe('<Muted/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        color: var(--color-gray-400,#b1b1b1);
      }

      .c0:before {
        content: '/';
      }

      <div>
        <span
          class="c0"
        >
          CHILDREN
        </span>
      </div>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Muted'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
