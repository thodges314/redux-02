import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Thomas Hodges' },
  { id: '1', name: 'Margaret Atwood' },
  { id: '2', name: 'Dave Grey' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
