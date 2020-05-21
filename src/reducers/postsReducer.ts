import * as types from '../actions/posts.types';

const INITIAL_STATE: types.PostsState = {
  loading: false,
  posts: [],
  post: null,
  offset: 0,
  error: '',
};

export const postsReducer = (
  state = INITIAL_STATE,
  action: types.PostActions
): types.PostsState => {
  switch (action.type) {
    default:
      return state;
  }
};
