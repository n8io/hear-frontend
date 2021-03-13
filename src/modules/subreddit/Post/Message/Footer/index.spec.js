import { makeRenderComponent } from 'testHelpers';
import { Footer } from '.';

jest.mock('./CommentsCounter', () => ({
  CommentsCounter: (props) => <x-comments-counter {...props} />,
}));

jest.mock('./SortOrder', () => ({
  SortOrder: (props) => <x-sort-order {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: Footer,
});
describe('<Footer/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      <div
        class="c0"
      >
        <x-comments-counter />
        <x-sort-order />
      </div>
    `);
  });
});
