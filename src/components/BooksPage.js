import AddBook from './AddBook';
import Book from './Book';

const Books = () => (
  <>
    <section className="book-list-container">
      <ul>
        <li>
          <Book
            bookTitle="The Hunger Games"
            author="Suzanne Collins"
            progress="68"
            page="Chapter 17"
          />
        </li>
        <li>
          <Book
            bookTitle="Dune"
            author="Frank Herbert"
            progress="8"
            page='Chapter 3: "A Lesson Learned"'
          />
        </li>
        <li>
          <Book
            bookTitle="Capital in the Twenty-First Century"
            author="Suzanne Collins"
            progress="0"
            page="Introduction"
          />
        </li>
      </ul>
    </section>
    <AddBook />
  </>
);

export default Books;
