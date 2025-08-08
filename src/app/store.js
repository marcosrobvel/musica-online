import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/DrumsPercussionSlice';
import guitarsReducer from '../features/GuitarsBassSlice';
import keyboardsReducer from '../features/KeyboardsSlice';
import traditionalsReducer from '../features/TraditionalsSlice';

const rootReducer = combineReducers({
  drums: drumsReducer,
  guitars: guitarsReducer,
  keyboards: keyboardsReducer,
  traditionals: traditionalsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
