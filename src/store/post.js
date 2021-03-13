import { atom } from 'recoil';
import { atomName } from './constants';

const post = atom({
  default: null,
  key: atomName.POST,
});

export { post };
