import { makeRenderComponent } from 'testHelpers';
import { NotFound } from '.';

jest.mock('react-router-dom', () => ({
  Link: (props) => <x-rrd-link {...props} />,
}));

jest.mock('components/PageTitle', () => ({
  PageTitle: (props) => <x-page-title {...props} />,
}));

const renderComponent = makeRenderComponent({
  component: NotFound,
});

describe('<NotFound/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      <div>
        <x-page-title
          title="Not Found"
        />
        <br />
        <p>
          <x-rrd-link
            to="#"
          >
            Go Back
          </x-rrd-link>
        </p>
      </div>
    `);
  });
});
