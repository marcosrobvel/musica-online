import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const keyboardsSlice = createSlice({
  name: 'keyboards',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = keyboardsSlice.actions;
export default keyboardsSlice.reducer;
