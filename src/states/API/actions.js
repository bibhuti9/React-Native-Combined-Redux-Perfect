import {menus} from '../../data/dummyData';
import {fetchMenus} from './reducer';
export function getMenus() {
  return async dispatch => {
    dispatch(fetchMenus(menus));
  };
}
