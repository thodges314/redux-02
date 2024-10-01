import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer, // Add the posts slice to the store.
    users: usersReducer, // Add the users slice to the store.
  },
});
