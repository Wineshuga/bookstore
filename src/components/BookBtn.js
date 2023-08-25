import PropTypes from 'prop-types';
import styles from '../styles/bookBtn.module.css';

const BookBtn = ({ click, btnName }) => (
  <button className={styles.book_btns} onClick={click} type="button">{ btnName }</button>
);

BookBtn.propTypes = {
  click: PropTypes.func,
  btnName: PropTypes.string.isRequired,
};

BookBtn.defaultProps = {
  click: undefined,
};
export default BookBtn;
