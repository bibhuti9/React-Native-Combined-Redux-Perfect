const initialState = {
  loginStatus: false,
  message: '',
  loader: false,
};

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCESS = 'LOGIN_SUCESS';
const LOGOUT = 'LOGOUT';

export const loginStart = () => {
  return {
    type: LOGIN_START,
    message: 'Please Wait..',
    loader: true,
    loginStatus: false,
  };
};

export const loginSucess = () => {
  return {
    type: LOGIN_SUCESS,
    message: 'Login Sucessfull..',
    loader: false,
    loginStatus: true,
  };
};

export const logOutSucess = () => {
  return {
    type: LOGOUT,
    message: 'Logout Sucessfully',
    loader: false,
    loginStatus: false,
  };
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loginStatus: action.loginStatus,
        message: action.message,
        loader: action.loader,
      };
    case LOGIN_SUCESS:
      return {
        ...state,
        loginStatus: action.loginStatus,
        message: action.message,
        loader: action.loader,
      };
    case LOGOUT:
      return {
        ...state,
        loginStatus: action.loginStatus,
        message: action.message,
        loader: action.loader,
      };
    default:
      return {...state};
  }
};

export const selectLoginStatus = state => state.appState.loginStatus;
export const selectMessage = state => state.appState.message;
export default appReducer;
