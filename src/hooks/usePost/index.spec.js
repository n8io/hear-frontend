import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { usePost } from '.';

jest.mock('react-query');
jest.mock('recoil');

const renderHookCurrent = (hookInitFn) => {
  const { result } = renderHook(hookInitFn);

  return result.current;
};

describe('usePost', () => {
  let setPostComments = null;

  beforeEach(() => {
    setPostComments = jest.fn();
    useSetRecoilState.mockReturnValue(setPostComments);
  });

  describe('when initializing', () => {
    let setPost = null;

    beforeEach(() => {
      setPost = jest.fn();
      useQuery.mockReturnValue({ isLoading: true });
      useRecoilState.mockReturnValue([undefined, setPost]);
    });

    test('return the expected props', () => {
      const current = renderHookCurrent(() => usePost());

      expect(current).toEqual({ isLoading: true });
    });

    test('sets the post to null', () => {
      renderHookCurrent(() => usePost());

      expect(setPost).toHaveBeenCalledWith(null);
    });
  });

  describe('when fetched successfully', () => {
    let setPost = null;
    let data = {};

    beforeEach(() => {
      setPost = jest.fn();
      useQuery.mockReturnValue({ data, isError: false, isLoading: false });
      useRecoilState.mockReturnValue([undefined, setPost]);
    });

    test('sets the post to the returned data', () => {
      renderHookCurrent(() => usePost());

      expect(setPost).toHaveBeenCalledWith(data);
      expect(setPostComments).toHaveBeenCalledWith(data.comments);
    });
  });

  describe('when fetch fails', () => {
    let setPost = null;
    let data = {};

    beforeEach(() => {
      setPost = jest.fn();
      useQuery.mockReturnValue({ isError: true, isLoading: false });
      useRecoilState.mockReturnValue([data, setPost]);
    });

    test('sets the post to null', () => {
      renderHookCurrent(() => usePost());

      expect(setPost).toHaveBeenCalledWith(null);
      expect(setPostComments).toHaveBeenCalledWith(null);
    });
  });
});
