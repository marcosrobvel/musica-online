import { combineReducers, configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/DrumsPercussionSlice';
import guitarsReducer from '../features/GuitarsBassSlice';
import keyboardsReducer from '../features/KeyboardsSlice';
import traditionalsReducer from '../features/TraditionalsSlice';
import windsReducer from '../features/WindsSlice';
import djReducer from '../features/DjSlice';
import othersReducer from '../features/OthersSlice';

const rootReducer = combineReducers({
  drums: drumsReducer,
  guitars: guitarsReducer,
  keyboards: keyboardsReducer,
  dj: djReducer,
  winds: windsReducer,
  traditionals: traditionalsReducer,
  others: othersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
