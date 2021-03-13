import { fireEvent } from '@testing-library/react';
import { makeRenderComponent } from 'testHelpers';
import { DeleteButton } from '.';

jest.mock('react-icons/md', () => ({
  MdDelete: (props) => <x-ri-md-delete data-testid="delete-icon" {...props} />,
}));

const defaultProps = {
  onDelete: jest.fn(),
};

const renderComponent = makeRenderComponent({
  component: DeleteButton,
  defaultProps,
});

describe('<DeleteButton/>', () => {
  test('renders properly', () => {
    expect(renderComponent().container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 0.125rem;
        cursor: pointer;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-self: end;
        margin: 0;
        opacity: 0.25;
        padding: 0.125rem 0.25rem;
        -webkit-transition: 200ms opacity ease-in;
        transition: 200ms opacity ease-in;
      }

      .c0:focus,
      .c0:hover {
        opacity: 1;
      }

      <div>
        <button
          aria-label="Delete comment"
          class="c0"
        >
          <x-ri-md-delete
            data-testid="delete-icon"
          />
        </button>
      </div>
    `);
  });

  test('the idle state is just an icon', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('delete-icon')).not.toBeNull();
  });

  describe('when clicked once', () => {
    test('the button has text', () => {
      const { getByRole, getByText } = renderComponent();
      const button = getByRole('button');

      fireEvent.click(button);

      expect(getByText('Click to Confirm')).not.toBeNull();
    });
  });

  describe('when clicked twice', () => {
    test('the button calls onDelete', () => {
      const onDelete = jest.fn();
      let { getByRole } = renderComponent({ onDelete });

      const button = getByRole('button');

      fireEvent.click(button);
      fireEvent.click(button);

      expect(onDelete).toHaveBeenCalledTimes(1);
    });
  });
});
