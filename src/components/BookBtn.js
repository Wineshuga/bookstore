import PropTypes from 'prop-types';

const BookBtn = ({ btnName }) => (
  <button type="button">{ btnName }</button>
);

BookBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
};
export default BookBtn;
