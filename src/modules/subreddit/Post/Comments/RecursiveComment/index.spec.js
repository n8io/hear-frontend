import { makeRenderComponent } from 'testHelpers';
import { RecursiveComment } from '.';

jest.mock('./Comment', () => ({
  ...jest.requireActual('./Comment'),
  Comment: (props) => <x-comment {...props} />,
}));

jest.mock('./VerticalRule', () => ({
  VerticalRule: (props) => <x-vertical-rule {...props} />,
}));

const comment = {
  author: 'AUTHOR',
  body_html: 'BODY_HTML',
  created_utc: 12345,
  id: 'ID_1',
};

const defaultProps = {
  comment,
  comments: [comment],
};

const renderComponent = makeRenderComponent({
  component: RecursiveComment,
  defaultProps,
});

describe('<RecursiveComment/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-comment
        author="AUTHOR"
        body_html="BODY_HTML"
        created_utc="12345"
        id="ID_1"
      />
    `);
  });

  test('renders recursive comments properly', () => {
    const childComment = { ...comment, id: 'ID_2', parent_id: comment.id };
    const comments = [comment, childComment];

    expect(renderComponent({ comments }).firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start;
        margin-top: 0.5rem;
        row-gap: 0.25rem;
        width: 100%;
      }

      .c1 {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1rem 1fr;
      }

      <div
        class="c0"
      >
        <x-comment
          author="AUTHOR"
          body_html="BODY_HTML"
          created_utc="12345"
          id="ID_1"
        />
        <div
          class="c1"
        >
          <x-vertical-rule />
          <div>
            <x-comment
              author="AUTHOR"
              body_html="BODY_HTML"
              created_utc="12345"
              id="ID_2"
              parent_id="ID_1"
            />
          </div>
        </div>
      </div>
    `);
  });
});
