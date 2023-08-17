import PropTypes from 'prop-types';
import BookBtn from './BookBtn';
import CurrChapter from './CurrChapter';

const Book = ({
  bookTitle, author, progress, page,
}) => (
  <section className="book-container">
    <section className="book-details-section">
      <div className="book-name">
        <h4>Action</h4>
        <h3>{bookTitle}</h3>
        <p>{author}</p>
      </div>
      <div className="book-buttons">
        <BookBtn btnName="Comments" />
        <BookBtn btnName="Remove" />
        <BookBtn btnName="Edit" />
      </div>
    </section>
    <section>
      <div className="progress-circle">
        progress circle
      </div>
      <div>
        <p>
          {progress}
          % completed
        </p>
      </div>
    </section>
    <section>
      <CurrChapter page={page} />
    </section>
  </section>
);

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Book;
