import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div>icon</div>
  </header>
);

export default Header;
