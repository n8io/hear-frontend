import { makeRenderComponent } from 'testHelpers';
import { ScreenReaderNotification } from '.';

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: ScreenReaderNotification,
  defaultProps,
});

describe('<ScreenReaderNotification/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-clip: rect(1px,1px,1px,1px);
        clip: rect(1px,1px,1px,1px);
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      <div
        aria-live="polite"
        class="c0"
      >
        CHILDREN
      </div>
    `);
  });
});
