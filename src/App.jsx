import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <>
      <header>상단 메뉴</header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
