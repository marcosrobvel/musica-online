import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const djSlice = createSlice({
  name: 'dj',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = djSlice.actions;
export default djSlice.reducer;
