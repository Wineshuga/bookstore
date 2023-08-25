import PropTypes from 'prop-types';
import styles from '../styles/currChapter.module.css';

const CurrChapter = ({ page }) => (
  <section className={styles.current_section}>
    <h3>CURRENT CHAPTER</h3>
    <p>{page}</p>
    <button className={styles.update_btn} type="button">UPDATE PROGRESS</button>
  </section>
);

CurrChapter.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CurrChapter;
