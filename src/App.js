import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';
import Header from './components/Header';
import './styles/App.css';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
