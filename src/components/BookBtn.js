import PropTypes from 'prop-types';

const BookBtn = ({ click, btnName }) => (
  <button onClick={click} type="button">{ btnName }</button>
);

BookBtn.propTypes = {
  click: PropTypes.func,
  btnName: PropTypes.string.isRequired,
};

BookBtn.defaultProps = {
  click: undefined,
};
export default BookBtn;
