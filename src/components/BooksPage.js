import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((store) => store.book.books);

  return (
    <>
      <section className="book-list-container">
        <ul>
          {books.map((book) => (
            <li key={book.item_id}>
              <Book
                category={book.category}
                title={book.title}
                author={book.author}
                progress="68"
                page="Chapter 17"
              />
            </li>
          ))}
        </ul>
      </section>
      <AddBook />
    </>
  );
};

export default Books;
