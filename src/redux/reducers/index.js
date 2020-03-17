import { combineReducers } from 'redux';
import authReducer from './authReducers';
import postReducer from './postReducers';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer
});

export default allReducers;
