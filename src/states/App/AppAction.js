import {flashMessage, logOutFunction} from '../../common/commonFunction';
import {loginStart, loginSucess, logOutSucess} from './AppReducer';

export function loginInitiate() {
  return async dispatch => {
    await dispatch(loginStart());
    dispatch(loginSucess());
  };
}
export function logOut() {
  return async dispatch => {
    await dispatch(loginStart());
    await logOutFunction();
    dispatch(logOutSucess());
  };
}
