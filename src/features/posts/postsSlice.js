import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learn Redux Toolkit',
    content: 'Redux Toolkit is a modern alternative to Redux.',
  },
  {
    id: '2',
    title: 'Use Redux Toolkit with React',
    content:
      'Redux Toolkit makes it easy to write Redux logic in a type-safe manner.',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    // removePost(state, action) {
    //   state = state.filter((post) => post.id!== action.payload);
    // },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
