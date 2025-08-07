import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/DrumsPercussionSlice';
import guitarsReducer from '../features/GuitarsBassSlice';
import keyboardsReducer from '../features/KeyboardsSlice';

const rootReducer = combineReducers({
  drums: drumsReducer,
  guitars: guitarsReducer,
  keyboards: keyboardsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
