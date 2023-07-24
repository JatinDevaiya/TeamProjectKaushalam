import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  color: "",
};
export const themslice = createSlice({
  name: "them",
  initialState,
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload;
    },
  },
});
export const {changeTextColor} = themslice.actions
export default themslice.reducer