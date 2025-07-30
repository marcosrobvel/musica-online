import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/DrumsPercussionSlice';

const rootReducer = combineReducers({
  drums: drumsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
