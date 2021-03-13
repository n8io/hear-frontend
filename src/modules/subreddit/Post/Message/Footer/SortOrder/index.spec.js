import { fireEvent } from '@testing-library/dom';
import { useRecoilState } from 'recoil';
import { makeRenderComponent } from 'testHelpers';
import { SortOrder } from '.';

jest.mock('react-icons/ti', () => ({
  TiArrowSortedDown: (props) => <x-ri-ti-arrow-sorted-down {...props} />,
  TiArrowSortedUp: (props) => <x-ri-ti-arrow-sorted-up {...props} />,
}));

jest.mock('recoil');

const renderComponent = makeRenderComponent({
  component: SortOrder,
});

describe('<SortOrder/>', () => {
  beforeEach(() => {
    useRecoilState.mockReturnValue([true, jest.fn()]);
  });

  test('renders properly', () => {
    expect(renderComponent().firstChild).toMatchInlineSnapshot(`
      .c0 {
        padding: 0.125rem 0.5rem;
      }

      <button
        aria-label="Sort the comments oldest first"
        class="c0"
      >
        oldest
         first
        <x-ri-ti-arrow-sorted-up />
      </button>
    `);
  });

  describe('when clicking the button', () => {
    const isAscending = false;
    let beAscending = null;

    beforeEach(() => {
      beAscending = jest.fn();
      useRecoilState.mockReturnValue([isAscending, beAscending]);
    });

    test('toggles the ascending state', () => {
      const { getByRole } = renderComponent();

      fireEvent.click(getByRole('button'));

      expect(beAscending).toHaveBeenCalledWith(!isAscending);
    });
  });
});
