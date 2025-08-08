import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const traditionalsSlice = createSlice({
  name: 'traditionals',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = traditionalsSlice.actions;
export default traditionalsSlice.reducer;
