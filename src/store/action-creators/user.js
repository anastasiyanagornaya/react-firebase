import * as actions from "../actions/user";

export const getUser = () => ({
  type: actions.GET_USER
});

export const getUserSuccess = () => ({
  type: actions.GET_USER_SUCCESS
});

export const updateUser = payload => ({
  type: actions.UPDATE_USER,
  payload
});

export const updateUserSuccess = payload => ({
  type: actions.UPDATE_USER_SUCCESS,
  payload
});
