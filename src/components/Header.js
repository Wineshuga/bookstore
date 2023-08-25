import { Link } from 'react-router-dom';
import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>Bookstore CMS</h1>
    <nav className={styles.header_nav}>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className={styles.header_icon}>
        <span className="material-icons primary-color">person</span>
      </div>

    </nav>
  </header>
);

export default Header;
