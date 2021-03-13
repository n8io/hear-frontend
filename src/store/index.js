import { post } from './post';
import { postComments } from './postComments';
import { postCommentsSortOrderAsc } from './postCommentsSortOrderAsc';

const atoms = {
  POST: post,
  POST_COMMENTS: postComments,
  POST_COMMENTS_SORT_ORDER_ASC: postCommentsSortOrderAsc,
};

export { atoms };
