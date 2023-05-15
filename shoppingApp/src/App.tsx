import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Bookmark from './pages/bookmark/Bookmark';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Products from './pages/products/Products';
import { cozShoppingAPI } from './modules/cozShoppingAPI';
import ToastContainer from './components/toast/ToastContainer';

const App = () => {
  console.log(cozShoppingAPI);
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/products/:filterlist" element={<Products />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
