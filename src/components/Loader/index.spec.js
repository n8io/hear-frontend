import { makeRenderComponent } from 'testHelpers';
import { Loader } from '.';

jest.mock('components/ScreenReaderNotification', () => ({
  ScreenReaderNotification: (props) => (
    <x-screen-reader-notification {...props} />
  ),
}));

const defaultProps = {
  size: 24,
};

const renderComponent = makeRenderComponent({
  component: Loader,
  defaultProps,
});

describe('<Loader/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        left: 50%;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }

      .c1 {
        display: block;
        height: 24px;
        position: relative;
        width: 24px;
      }

      .c1 div {
        -webkit-animation: spin 1.2s cubic-bezier(0.5,0,0.5,1) infinite;
        animation: spin 1.2s cubic-bezier(0.5,0,0.5,1) infinite;
        border: 2.4px solid var(--color-black,#000);
        border-color: var(--color-black,#000) transparent transparent transparent;
        border-radius: 50%;
        box-sizing: border-box;
        display: block;
        height: 24px;
        position: absolute;
        width: 24px;
      }

      .c1 div:nth-child(1) {
        -webkit-animation-delay: -0.45s;
        animation-delay: -0.45s;
      }

      .c1 div:nth-child(2) {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
      }

      .c1 div:nth-child(3) {
        -webkit-animation-delay: -0.15s;
        animation-delay: -0.15s;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
          size="24"
        >
          <div />
          <div />
          <div />
          <div />
        </div>
        <x-screen-reader-notification>
          Please wait while your content is loaded
        </x-screen-reader-notification>
      </div>
    `);
  });
});
