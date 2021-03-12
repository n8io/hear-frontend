import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('../RelativeTime', () => ({
  RelativeTime: (props) => <x-relative-time {...props} />,
}));

const { RelativeTimeLink } = PublicApi;
const date = new Date('2000-01-01T00:00:00.000Z');

const defaultProps = {
  secondsSinceEpoch: date.getTime() / 1000,
  to: '/TO',
};

const renderComponent = makeRenderComponent({
  component: RelativeTimeLink,
  defaultProps,
});

describe('<RelativeTimeLink/>', () => {
  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-rrd-link
        classname="sc-bdfBwQ bFnbAU sc-gsTCUz gcupIs"
        to="/TO"
      >
        <x-relative-time
          secondssinceepoch="946684800"
        />
      </x-rrd-link>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['RelativeTimeLink'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });
});
