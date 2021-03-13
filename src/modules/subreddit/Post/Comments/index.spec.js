import { usePost } from 'hooks/usePost';
import { useRecoilValue } from 'recoil';
import { makeRenderComponent } from 'testHelpers';
import { Comments } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('recoil');

jest.mock('hooks/usePost');

jest.mock('./RecursiveComment', () => ({
  RecursiveComment: (props) => (
    <x-recursive-comment
      data-testid={`comment-${props.comment.id}`}
      {...props}
    />
  ),
}));

const renderComponent = makeRenderComponent({
  component: Comments,
});

const comment1 = {
  author: 'AUTHOR',
  body_html: 'BODY_HTML',
  created_utc: 12345,
  depth: 0,
  id: 'ID_1',
};

const comment2 = {
  ...comment1,
  created_utc: comment1.created_utc + 1,
  id: 'ID_2',
};

const post = { comments: [comment1, comment2] };

describe('<Comments/>', () => {
  describe('sorts accordingly when ascending', () => {
    const isAscending = true;

    beforeEach(() => {
      useRecoilValue
        .mockReturnValueOnce(isAscending)
        .mockReturnValueOnce(post.comments);
      usePost.mockReturnValue({ post });
    });

    test('renders properly', () => {
      expect(renderComponent().firstChild).toMatchInlineSnapshot(`
        .c0 {
          display: grid;
          grid-auto-columns: 1fr;
          margin: 0 1rem;
        }

        <section
          class="c0"
          title="Comments"
        >
          <x-recursive-comment
            comment="[object Object]"
            comments="[object Object],[object Object]"
            data-testid="comment-ID_1"
          />
          <x-recursive-comment
            comment="[object Object]"
            comments="[object Object],[object Object]"
            data-testid="comment-ID_2"
          />
        </section>
      `);
    });
  });

  describe('sorts accordingly when descending', () => {
    const isAscending = false;

    beforeEach(() => {
      useRecoilValue
        .mockReturnValueOnce(isAscending)
        .mockReturnValueOnce(post.comments);
      usePost.mockReturnValue({ post });
    });

    test('renders properly', () => {
      expect(renderComponent().firstChild).toMatchInlineSnapshot(`
        .c0 {
          display: grid;
          grid-auto-columns: 1fr;
          margin: 0 1rem;
        }

        <section
          class="c0"
          title="Comments"
        >
          <x-recursive-comment
            comment="[object Object]"
            comments="[object Object],[object Object]"
            data-testid="comment-ID_2"
          />
          <x-recursive-comment
            comment="[object Object]"
            comments="[object Object],[object Object]"
            data-testid="comment-ID_1"
          />
        </section>
      `);
    });
  });
});
