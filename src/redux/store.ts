import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import postReducer from '../components/features/posts/postsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
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
