import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { PageContent } = PublicApi;

const defaultProps = {
  children: 'CHILDREN',
};

const renderComponent = makeRenderComponent({
  component: PageContent,
  defaultProps,
});

describe('<PageContent/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        row-gap: 0.5rem;
      }

      <div
        class="c0"
      >
        CHILDREN
      </div>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['PageContent'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
