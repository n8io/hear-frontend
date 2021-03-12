const route = Object.freeze({
  NOT_FOUND: '/404',
  ROOT: '/',
  SUBREDDIT: '/r/:subredditId',
  SUBREDDIT_POSTS: '/r/:subredditId',
  SUBREDDIT_POSTS_POST: '/r/:subredditId/posts/:postId',
  SUBREDDIT_POSTS_VIEW: '/r/:subredditId/:viewType',
  USER_PROFILE: '/user/:userId',
});

export { route };
