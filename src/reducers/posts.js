import {
  UPDATE_POSTS,
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST,
  LIKE_POST,
} from '../actions/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case UPDATE_POSTS: {
      state[action.id] = action.post;
      return state;
    }
    case LIKE_POST: {
      state[action.id].liked = action.liked;
      return state;
    }
    case DELETE_POST: {
      const filteredArray = state.filter((post) => post !== action.post);
      return filteredArray;
    }
    default:
      return state;
  }
}
