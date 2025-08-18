import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const windsSlice = createSlice({
  name: 'winds',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = windsSlice.actions;
export default windsSlice.reducer;
