import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import styleReducer from './features/styleSlice';
const store = configureStore({
  reducer: {
    posts: postsReducer,
    style: styleReducer,
  },
});

export default store;
