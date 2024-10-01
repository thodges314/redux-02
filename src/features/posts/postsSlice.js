import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => ({
        payload: {
          id: nanoid(),
          title,
          content,
          userId,
        },
      }),
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
