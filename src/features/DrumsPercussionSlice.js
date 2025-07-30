import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const drumsSlice = createSlice({
  name: 'drums',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = drumsSlice.actions;
export default drumsSlice.reducer;
