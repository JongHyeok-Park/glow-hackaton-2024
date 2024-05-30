import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        상단 메뉴
      </header>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </>
  )
}

export default App
