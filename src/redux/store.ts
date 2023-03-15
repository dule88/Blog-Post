import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import counterReducer from '../components/features/counter/counterSlice';
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  // TODO: Add more reducers here if needed
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
