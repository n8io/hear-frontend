import { usePost } from 'hooks/usePost';
import { makeRenderComponent } from 'testHelpers';
import { Comments } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('hooks/usePost');

jest.mock('./RecursiveComment', () => ({
  RecursiveComment: (props) => <x-recursive-comment {...props} />,
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

const comment2 = { ...comment1, id: 'ID_2' };

const post = { comments: [comment1, comment2] };

describe('<Comments/>', () => {
  beforeEach(() => {
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
        />
        <x-recursive-comment
          comment="[object Object]"
          comments="[object Object],[object Object]"
        />
      </section>
    `);
  });
});
