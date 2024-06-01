import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Redirect from './pages/Redirect';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
