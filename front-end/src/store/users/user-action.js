import USER_ACTION_TYPES from './user-type';

export const setCurrentUser = (user) => ({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});

export const setUserError = (error) => ({type: USER_ACTION_TYPES.SET_ERROR, payload: error});