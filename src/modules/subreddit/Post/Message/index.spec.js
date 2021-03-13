import { usePost } from 'hooks/usePost';
import { makeRenderComponent } from 'testHelpers';
import { Message } from '.';

jest.mock('./Footer', () => ({
  Footer: (props) => <x-footer {...props} />,
}));

jest.mock('./OriginalPoster', () => ({
  OriginalPoster: (props) => <x-original-poster {...props} />,
}));

jest.mock('hooks/usePost');

const renderComponent = makeRenderComponent({
  component: Message,
});

const post = { selftext: 'SELF_TEXT' };

describe('<Message/>', () => {
  beforeEach(() => {
    usePost.mockReturnValue({ post });
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: var(--color-gray-300);
        border-radius: 0.5rem;
        display: grid;
        font-size: 0.85rem;
        padding: 1rem;
        row-gap: 1rem;
      }

      <section
        class="c0"
        title="Original post message"
      >
        <x-original-poster />
        <div>
          SELF_TEXT
        </div>
        <x-footer />
      </section>
    `);
  });
});
