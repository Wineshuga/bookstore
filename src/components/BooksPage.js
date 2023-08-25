import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './AddBook';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const mainBook = useSelector((store) => store.book);
  const books = useSelector((store) => store.book.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  let content;
  if (mainBook.status === 'Loading') {
    content = <li>Loading books</li>;
  } else if (mainBook.status === 'Failed') {
    content = <li>There was an error</li>;
  } else {
    const bookArr = Object.keys(books);
    content = bookArr.map((book) => {
      const bookData = books[book];
      return (
        <li key={book}>
          <Book
            id={book}
            category={bookData[0].category}
            title={bookData[0].title}
            author={bookData[0].author}
            progress="68"
            page="Chapter 17"
          />
        </li>
      );
    });
  }
  return (
    <>
      <section className="book-list-container">
        <ul>
          {content}
        </ul>
      </section>
      <AddBook />
    </>
  );
};

export default Books;
