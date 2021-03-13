import { makeRenderComponent } from 'testHelpers';
import { VerticalRule } from '.';

const renderComponent = makeRenderComponent({
  component: VerticalRule,
});

describe('<VerticalRule/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        height: 100%;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 0.5rem;
      }

      .c0 button:focus {
        background-color: var(--color-orange-400);
        width: 0.5rem;
      }

      .c0:hover button,
      .c0:focus button {
        background-color: var(--color-orange-400);
        width: 0.5rem;
      }

      .c1 {
        background-color: var(--color-gray-200);
        height: 100%;
        -webkit-transition: 50ms width ease-in-out,200ms background-color ease-in-out;
        transition: 50ms width ease-in-out,200ms background-color ease-in-out;
        width: 0.125rem;
      }

      <div>
        <div
          class="c0"
        >
          <button
            class="c1"
          />
        </div>
      </div>
    `);
  });
});
