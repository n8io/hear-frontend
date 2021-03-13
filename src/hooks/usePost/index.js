import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atoms } from 'store';

const CACHE_KEY = 'post';

const POST_URL =
  'https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json';

const fetchPost = () => fetch(POST_URL).then((r) => r.json());

const usePost = () => {
  const { data, isError, isLoading } = useQuery(CACHE_KEY, fetchPost);
  const [post, setPost] = useRecoilState(atoms.POST);
  const setPostComments = useSetRecoilState(atoms.POST_COMMENTS);

  const isValid = !isLoading && !isError;

  useEffect(() => {
    if (isValid) {
      setPost(data);
      setPostComments(data.comments);
    } else {
      setPost(null);
      setPostComments(null);
    }
  }, [data, isValid, setPost, setPostComments]);

  return { isError, isLoading, post };
};

export { usePost };
