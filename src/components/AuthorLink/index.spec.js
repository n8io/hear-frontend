import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

const { AuthorLink } = PublicApi;

const defaultProps = {
  author: 'AUTHOR',
};

const renderComponent = makeRenderComponent({
  component: AuthorLink,
  defaultProps,
});

describe('<AuthorLink/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-link
        classname="sc-bdfBwQ bFnbAU sc-gsTCUz hoCqTq"
        to="/user/AUTHOR"
      >
        AUTHOR
      </x-rrd-link>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['AuthorLink'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
