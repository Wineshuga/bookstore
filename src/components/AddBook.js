import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postBooks } from '../redux/books/booksSlice';
import styles from '../styles/addBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    bookTitle: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.bookTitle.trim() && book.author.trim()) {
      dispatch(postBooks({
        item_id: nanoid(), title: book.bookTitle, author: book.author, category: 'Fiction',
      }));
    }
    setBook({
      bookTitle: '',
      author: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <hr />
      <h3>ADD NEW BOOK</h3>
      <fieldset>
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          placeholder="Book title"
          value={book.bookTitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          value="ADD BOOK"
        />
      </fieldset>
    </form>
  );
};

export default AddBook;
