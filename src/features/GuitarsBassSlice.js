import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  datos: [],
};

const guitarsSlice = createSlice({
  name: 'guitars',
  initialState,
  reducers: {
    setDatos(state, action) {
      state.datos = action.payload;
    },
  },
});

export const { setDatos } = guitarsSlice.actions;
export default guitarsSlice.reducer;
