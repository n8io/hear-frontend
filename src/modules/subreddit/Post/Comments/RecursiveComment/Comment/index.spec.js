import { makeRenderComponent } from 'testHelpers';
import { Comment } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('components/AuthorLink', () => ({
  AuthorLink: (props) => <x-author-link {...props} />,
}));

jest.mock('components/RelativeTimeLink', () => ({
  RelativeTimeLink: (props) => <x-relative-time-link {...props} />,
}));

const defaultProps = {
  author: 'AUTHOR',
  body_html: 'BODY_HTML',
  created_utc: 'CREATED_UTC',
  id: 'ID',
};

const renderComponent = makeRenderComponent({
  component: Comment,
  defaultProps,
});

describe('<Comment/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        font-size: 0.85rem;
        margin-top: 0.5rem;
      }

      .c1 {
        display: none;
      }

      .c3 {
        height: 0.5rem;
      }

      .c2 {
        font-size: 0.75rem;
      }

      <div>
        <div
          class="c0"
          id="comment-ID"
        >
          <span
            class="c1"
          >
            BODY_HTML
          </span>
          <div
            class="c2"
          >
            <x-author-link
              author="AUTHOR"
            />
             
            <x-relative-time-link
              secondssinceepoch="CREATED_UTC"
              to="#comment-ID"
            />
          </div>
          <div
            class="c3"
          />
          <span />
        </div>
      </div>
    `);
  });
});
