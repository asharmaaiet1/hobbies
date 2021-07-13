import { combineReducers } from 'redux';
import {
  UPDATE_USERS_LIST,
  UPDATE_SELECTED_USER,
  UPDATE_HOBBIES_LIST,
  ADD_NEW_HOBBY,
  TOGGLE_POPUP,
  UPDATE_SELECTED_HOBBY
} from './actions';

function usersList(state = [], action: any) {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return [...state, ...action.data];
    default:
      return state;
  }
}

function selectedUser(state = '', action: any) {
  switch (action.type) {
    case UPDATE_SELECTED_USER:
      return action.data;
    default:
      return state;
  }
}

function hobbiesList(state = [], action: any) {
  switch (action.type) {
    case UPDATE_HOBBIES_LIST:
      return action.data;
    case ADD_NEW_HOBBY:
      return [...state, ...action.data];
    default:
      return state;
  }
}

function selectedHobby(state = '', action: any) {
  switch (action.type) {
    case UPDATE_SELECTED_HOBBY:
      return action.data;
    default:
      return state;
  }
}

function currentPopup(state = "-1", action: any) {
  switch (action.type) {
    case TOGGLE_POPUP:
      return action.id
    default:
      return state;
  }
}

const reducers = combineReducers({
  usersList,
  selectedUser,
  hobbiesList,
  selectedHobby,
  currentPopup,
});

export default reducers;
