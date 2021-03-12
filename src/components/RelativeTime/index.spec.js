import * as DateFns from 'date-fns';
import { makeRenderComponent } from 'testHelpers';
import * as PublicApi from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('date-fns');

const { RelativeTime } = PublicApi;
const date = new Date('2000-01-01T00:00:00.000Z');

const defaultProps = {
  secondsSinceEpoch: date.getTime() / 1000,
};

const renderComponent = makeRenderComponent({
  component: RelativeTime,
  defaultProps,
});

describe('<RelativeTime/>', () => {
  let formatDistanceToNowSpy = null;

  beforeEach(() => {
    formatDistanceToNowSpy = jest
      .spyOn(DateFns, 'formatDistanceToNow')
      .mockReturnValue('some time ago');
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <span>
        some time ago
      </span>
    `);
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['RelativeTime'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });

  test('makes proper call to formatDistanceToNow', () => {
    renderComponent();

    expect(formatDistanceToNowSpy).toHaveBeenCalledWith(date, {
      addSuffix: true,
    });
  });
});
