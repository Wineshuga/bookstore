import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook: (state) => [...state.books, { title: 'New Book' }],
    removeBook: (state, { payload }) => [...state.books].filter((item) => item.id !== payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
