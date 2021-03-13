import { fireEvent } from '@testing-library/dom';
import { useRecoilState } from 'recoil';
import { makeRenderComponent } from 'testHelpers';
import { Comment } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('recoil');

jest.mock('components/AuthorLink', () => ({
  AuthorLink: (props) => <x-author-link {...props} />,
}));

jest.mock('components/RelativeTimeLink', () => ({
  RelativeTimeLink: (props) => <x-relative-time-link {...props} />,
}));

jest.mock('./DeleteButton', () => ({
  // eslint-disable-next-line react/prop-types
  DeleteButton: ({ onDelete, ...props }) => (
    <button data-testid="delete-button" onClick={onDelete} {...props} />
  ),
}));

const comment = {
  author: 'AUTHOR',
  body_html: 'BODY_HTML',
  created_utc: 'CREATED_UTC',
  id: 'ID',
};

const defaultProps = comment;

const renderComponent = makeRenderComponent({
  component: Comment,
  defaultProps,
});

describe('<Comment/>', () => {
  let setComments = null;

  beforeEach(() => {
    setComments = jest.fn();
    useRecoilState.mockReturnValue([[comment], setComments]);
  });

  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        font-size: 0.85rem;
        margin-top: 0.5rem;
      }

      .c2 {
        height: 0.5rem;
      }

      .c1 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: 0.75rem;
        gap: 0.25rem;
        -webkit-box-pack: start;
        -webkit-justify-content: start;
        -ms-flex-pack: start;
        justify-content: start;
      }

      <div>
        <div
          class="c0"
          data-html="BODY_HTML"
          data-is-deleted="false"
          id="comment-ID"
        >
          <div
            class="c1"
          >
            <x-author-link
              author="AUTHOR"
            />
             
            <x-relative-time-link
              secondssinceepoch="CREATED_UTC"
              to="#comment-ID"
            />
            <button
              data-testid="delete-button"
            />
          </div>
          <div
            class="c2"
          />
          <span>
            BODY_HTML
          </span>
        </div>
      </div>
    `);
  });

  describe('when clicking delete', () => {
    test('updates comments in state', () => {
      const { getByTestId } = renderComponent();

      fireEvent.click(getByTestId('delete-button'));

      expect(setComments).toHaveBeenCalledTimes(1);
    });
  });
});
