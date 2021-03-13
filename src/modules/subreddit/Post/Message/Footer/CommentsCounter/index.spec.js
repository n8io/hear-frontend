import { usePost } from 'hooks/usePost';
import { makeRenderComponent } from 'testHelpers';
import { CommentsCounter } from '.';

jest.mock('react-icons/md', () => ({
  MdModeComment: (props) => <x-ri-md-mode-comment {...props} />,
}));

jest.mock('hooks/usePost');

const renderComponent = makeRenderComponent({
  component: CommentsCounter,
});

const comment1 = {
  author: 'AUTHOR',
  body_html: 'BODY_HTML',
  created_utc: 12345,
  depth: 0,
  id: 'ID_1',
};

const comment2 = { ...comment1, id: 'ID_2' };

const post = { comments: [comment1, comment2] };

describe('<CommentsCounter/>', () => {
  beforeEach(() => {
    usePost.mockReturnValue({ post });
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-column-gap: 0.25rem;
        column-gap: 0.25rem;
        display: grid;
        font-weight: 500;
        grid-auto-flow: column;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start;
      }

      <div
        class="c0"
      >
        <x-ri-md-mode-comment
          alt="Comment icon"
        />
        <span>
          2
           comments
        </span>
      </div>
    `);
  });
});
