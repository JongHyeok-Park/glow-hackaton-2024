import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
