import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useRecoilState } from 'recoil';
import { atoms } from 'store';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 0.125rem 0.5rem;
`;

const SortOrder = () => {
  const [isAscending, beAscending] = useRecoilState(
    atoms.POST_COMMENTS_SORT_ORDER_ASC
  );

  const onClick = () => beAscending(!isAscending);
  const label = isAscending ? 'oldest' : 'newest';

  return (
    <ToggleButton
      aria-label={`Sort the comments ${label} first`}
      onClick={onClick}
    >
      {label} first
      {isAscending ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
    </ToggleButton>
  );
};

export { SortOrder };
