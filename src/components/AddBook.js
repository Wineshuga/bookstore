import { useState } from 'react';

const AddBook = () => {
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
  };

  return (
    <form>
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
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddBook;
