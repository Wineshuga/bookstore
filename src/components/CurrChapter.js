import PropTypes from 'prop-types';

const CurrChapter = ({ page }) => (
  <>
    <h3>CURRENT CHAPTER</h3>
    <p>{page}</p>
    <button type="button">UPDATE PROGRESS</button>
  </>
);

CurrChapter.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CurrChapter;
