import { makeRenderComponent } from 'testHelpers';
import { random } from 'utils/profileImage';
import * as PublicApi from '.';

jest.mock('hooks/useSnood', () => ({
  Provider: (props) => <x-snood-provider {...props} />,
}));

jest.mock('utils/profileImage');

const { Provider } = PublicApi;

const defaultProps = { children: 'CHILDREN' };

const renderComponent = makeRenderComponent({
  component: Provider,
  defaultProps,
});

describe('the Snood provider', () => {
  beforeEach(() => {
    random.mockReturnValue('snood_image_url');
  });

  test('exports only the allowed exports', () => {
    const allowedExports = ['Provider'];

    expect(Object.keys(PublicApi).sort()).toEqual(allowedExports);
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      <x-snood-provider
        value="snood_image_url"
      >
        CHILDREN
      </x-snood-provider>
    `);
  });
});
