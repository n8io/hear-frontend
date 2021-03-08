import { makeRenderComponent } from 'testHelpers';
import { Layout } from '.';

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: Layout,
  defaultProps,
});

describe('<Layout/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <div>
        CHILDREN
      </div>
    `);
  });
});
