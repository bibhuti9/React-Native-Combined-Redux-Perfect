import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  menus: [],
  loader: false,
  message: '',
  login: true,
};

const apiReducer = createSlice({
  name: 'apiState',
  initialState,
  reducers: {
    fetchMenus: (state, action) => {
      state.menus = action.payload;
      return state;
    },
  },
});
export const {fetchMenus} = apiReducer.actions;
export const selctMenus = state => state.menus.menus;
export default apiReducer.reducer;
