import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import BookBtn from './BookBtn';
import CurrChapter from './CurrChapter';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, category, title, author, progress, page,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="book-container">
      <section className="book-details-section">
        <div className="book-name">
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="book-buttons">
          <BookBtn btnName="Comments" />
          <BookBtn
            click={() => dispatch(removeBook({ item_id: id }))}
            btnName="Remove"
          />
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
};

Book.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

Book.defaultProps = {
  category: undefined,
};

export default Book;
