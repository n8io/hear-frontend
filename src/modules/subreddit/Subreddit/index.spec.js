import { makeRenderComponent } from 'testHelpers';
import { Subreddit } from '.';

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Subreddit,
  defaultProps,
});

describe('<Subreddit/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`TBD`);
  });
});
