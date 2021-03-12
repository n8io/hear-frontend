import { usePost } from 'hooks/usePost';
import { makeRenderComponent } from 'testHelpers';
import { Title } from '.';

jest.mock('./Score', () => ({
  Score: (props) => <x-score {...props} />,
}));

jest.mock('hooks/usePost');

const defaultProps = { score: 1233465 };

const renderComponent = makeRenderComponent({
  component: Title,
  defaultProps,
});

const post = { score: 43243, title: 'TITLE' };

describe('<Title/>', () => {
  beforeEach(() => {
    usePost.mockReturnValue({ post });
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.5rem;
      }

      .c1 {
        display: inline;
        font-size: 1.5rem;
        font-weight: 500;
      }

      <div
        class="c0"
      >
        <x-score
          score="43243"
        />
         
        <h2
          class="c1"
        >
          TITLE
        </h2>
      </div>
    `);
  });
});
