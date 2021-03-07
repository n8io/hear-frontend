import { render, screen } from '@testing-library/react';
import { App } from '.';

describe('<App/>', () => {
  test('renders properly', () => {
    render(<App />);

    expect(screen.getByText(/TBD/)).not.toBeNull();
  });
});
