import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Category from './pages/Category';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
