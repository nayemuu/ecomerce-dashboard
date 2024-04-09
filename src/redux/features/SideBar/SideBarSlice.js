import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: true,
};

const SideBarSlice = createSlice({
  name: 'SideBar',
  initialState,
  reducers: {
    changeSidebarStatus: (state, action) => {
      //state.status = action.payload;
      state.status = !state.status;
    },
  },
});

export const { changeSidebarStatus } = SideBarSlice.actions;
export default SideBarSlice.reducer;
