import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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
    dispatch(addBook({
      item_id: String(Math.floor(Math.random() * 100)), title: book.bookTitle, author: book.author,
    }));
    setBook({
      bookTitle: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        name="bookTitle"
        id="bookTitle"
        placeholder="Book title"
        value={book.bookTitle}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="ADD BOOK"
      />
    </form>
  );
};

export default AddBook;
