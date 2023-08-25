import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import BookBtn from './BookBtn';
import CurrChapter from './CurrChapter';
import { deleteBooks } from '../redux/books/booksSlice';
import styles from '../styles/book.module.css';

const Book = ({
  id, category, title, author, progress, page,
}) => {
  const dispatch = useDispatch();

  return (
    <section className={styles.book_container}>
      <section className={styles.book_details_section}>
        <div className={styles.book_name}>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className={styles.book_buttons}>
            <BookBtn btnName="Comments" />
            <BookBtn
              click={() => dispatch(deleteBooks(id))}
              btnName="Remove"
            />
            <BookBtn btnName="Edit" />
          </div>

        </div>
        <section className={styles.progress_section}>
          <div className={styles.progress_circle} />
          <div className={styles.progress_status}>
            <p>
              {progress}
              %
              {' '}
            </p>
            <p>completed</p>
          </div>
        </section>
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
