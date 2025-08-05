import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/DrumsPercussionSlice';
import guitarsReducer from '../features/GuitarsBassSlice';

const rootReducer = combineReducers({
  drums: drumsReducer,
  guitars: guitarsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
