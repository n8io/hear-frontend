import { makeRenderComponent } from 'testHelpers';
import { GlobalStyles } from '.';

const renderComponent = makeRenderComponent({
  component: GlobalStyles,
});

describe('<GlobalStyles/>', () => {
  test('renders without exploding', () => {
    expect(renderComponent().container).not.toBeNull();
  });
});
