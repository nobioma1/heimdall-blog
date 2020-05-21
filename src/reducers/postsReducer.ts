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
    case types.ActionTypes.FETCH_START:
      return {
        ...state,
        post: null,
        loading: true,
        error: '',
      };
    default:
      return state;
  }
};
