import { usePost } from 'hooks/usePost';
import { makeRenderComponent } from 'testHelpers';
import { OriginalPoster } from '.';

jest.mock('components/AuthorLink', () => ({
  AuthorLink: (props) => <x-author-link {...props} />,
}));

jest.mock('components/Muted', () => ({
  Muted: (props) => <x-muted {...props} />,
}));

jest.mock('components/RelativeTime', () => ({
  RelativeTime: (props) => <x-relative-time {...props} />,
}));

jest.mock('hooks/usePost');

const renderComponent = makeRenderComponent({
  component: OriginalPoster,
});

const post = { author: 'AUTHOR', created_utc: 111111111 };

describe('<OriginalPoster/>', () => {
  beforeEach(() => {
    usePost.mockReturnValue({ post });
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-muted
        classname="sc-bdfBwQ cyyeng"
        level="7"
      >
        Posted 
        <x-relative-time
          secondssinceepoch="111111111"
        />
         by
         
        <x-author-link
          author="AUTHOR"
        />
      </x-muted>
    `);
  });
});
