import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const othersSlice = createSlice({
  name: 'others',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = othersSlice.actions;
export default othersSlice.reducer;
