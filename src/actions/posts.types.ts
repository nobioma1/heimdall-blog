export interface Post {
  id: number;
  date: Date;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_image: string;
}

export interface PostsState {
  loading: boolean;
  posts: Post[];
  post: null | Post;
  offset: number;
  error: string;
}

export enum ActionTypes {
  FETCH_START = 'FETCH_START',
  FETCH_POST = 'FETCH_POST',
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export interface fetchStartAction {
  type: ActionTypes.FETCH_START;
}

export interface fetchPostAction {
  type: ActionTypes.FETCH_POST;
  payload: Post;
}

export interface fetchPostsAction {
  type: ActionTypes.FETCH_POSTS;
  payload: Post[];
  offset: number;
}

export interface fetchErrorAction {
  type: ActionTypes.FETCH_ERROR;
  payload: string;
}

export type fetchPosts = () => void;
export type fetchPost = () => void;

export type PostActions =
  | fetchStartAction
  | fetchPostAction
  | fetchPostsAction
  | fetchErrorAction;
