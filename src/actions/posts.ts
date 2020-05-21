import axios from 'axios';
import { Action } from 'redux';

import { ActionTypes } from './posts.types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../store';

export const fetchPosts = ({
  offset,
}: {
  offset: number;
}): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_START });
  try {
    const response = await axios.get(
      `https://epower.ng/wp-json/wp/v2/posts?per_page=${6}&offset=${offset}`
    );
    dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data, offset });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_ERROR });
  }
};

export const fetchPost = ({
  slug,
}: {
  slug: string;
}): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_START });
  try {
    const response = await axios.get(
      `https://epower.ng/wp-json/wp/v2/posts?slug=${slug}`
    );
    if (response.data[0]) {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data[0] });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_ERROR,
      payload: 'Sorry, error displaying post at the moment',
    });
  }
};
