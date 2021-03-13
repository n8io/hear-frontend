import { atom } from 'recoil';
import { atomName } from './constants';

const postComments = atom({
  default: [],
  key: atomName.POST_COMMENTS,
});

export { postComments };
