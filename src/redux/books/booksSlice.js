import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
  status: 'idle',
};

const uniqueId = 'Q24mTCpWL67XWehatjxC';

export const fetchBooks = createAsyncThunk('type/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${uniqueId}/books`);
    return response.data;
  } catch (err) {
    return err;
  }
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [
        ...state.books,
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((item) => item.item_id !== payload.item_id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'Success';
        const data = action.payload;
        state.books = data;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'Failed';
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
