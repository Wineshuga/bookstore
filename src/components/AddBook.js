import { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState({
    bookTitle: '',
    category: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book.bookTitle + ' ' + book.category);
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
      <select name="category" id="category" onChange={handleChange}>
        <option value="" disabled defaultValue={book.category}>Category</option>
        <option value="Action">Action</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Romance">Romance</option>
        <option value="Comedy">Comedy</option>
        <option value="Fiction">Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Self-help">Self-help</option>
      </select>
      <input
        type="submit"
        value="ADD BOOK"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddBook;
