import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [
        ...state.books,
        {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, { payload }) => [...state].filter((item) => item.id !== payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
