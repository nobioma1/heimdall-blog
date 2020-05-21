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
    case types.ActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        offset: action.offset,
      };
    case types.ActionTypes.FETCH_POST:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    default:
      return state;
  }
};
