import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => ({
      books: [...state.books, { title: 'New Book' }],
    }),
    removeBook: (state, { payload }) => ({
      books: [...state.books].filter((item) => item.id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
