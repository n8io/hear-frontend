import { useSnood } from 'hooks/useSnood';
import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

const { Header } = PublicApi;

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('components/Logo', () => ({
  Logo: (props) => <x-logo {...props} />,
}));

jest.mock('hooks/useSnood');

const renderComponent = makeRenderComponent({
  component: Header,
});

describe('<Header/>', () => {
  beforeEach(() => {
    useSnood.mockReturnValue('SNOOD_URL');
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: var(--color-white,#fff);
        box-shadow: 0 1px 0.25rem var(--color-gray-300,#dcdcdc);
        -webkit-column-gap: 0.5rem;
        column-gap: 0.5rem;
        display: grid;
        grid-template-columns: auto 1fr;
      }

      <header
        class="c0"
      >
        <x-rrd-link
          classname="sc-gsTCUz kQYUyf"
          to="/"
        >
          <img
            alt="Reddit Snood character"
            height="48"
            src="SNOOD_URL"
            width="48"
          />
        </x-rrd-link>
        <x-logo
          height="24"
        />
      </header>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Header'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
