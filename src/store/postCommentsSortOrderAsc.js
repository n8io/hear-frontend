import { atom } from 'recoil';
import { atomName } from './constants';

const postCommentsSortOrderAsc = atom({
  default: true,
  key: atomName.POST_COMMENTS_SORT_ORDER_ASC,
});

export { postCommentsSortOrderAsc };
