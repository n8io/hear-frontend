import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { PageTitle } = PublicApi;

jest.mock('react-helmet-async', () => ({
  Helmet: (props) => <x-react-helmet-async {...props} />,
}));

const defaultProps = {
  title: 'TITLE',
};

const renderComponent = makeRenderComponent({
  component: PageTitle,
  defaultProps,
});

describe('<PageTitle/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      <div>
        <x-react-helmet-async>
          <title>
            Reddit :: 
            TITLE
          </title>
        </x-react-helmet-async>
        <h1>
          TITLE
        </h1>
      </div>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['PageTitle'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
