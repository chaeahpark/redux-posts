import {
  FETCH_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from '../constants/types';

const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
