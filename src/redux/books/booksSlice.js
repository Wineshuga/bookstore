import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const uniqueId = 'DmsZz2yR41rVIX7oJeNz';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueId}`;

const initialState = {
  books: [],
  status: 'idle',
};

export const fetchBooks = createAsyncThunk('type/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/books`);
    const { data } = response;
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const postBooks = createAsyncThunk('type/postBooks', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/books`, data);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
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

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
