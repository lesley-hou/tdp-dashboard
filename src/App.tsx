import './App.css'
import Dashboard from './pages/dashboard';
import { Routes, Route } from 'react-router-dom'; 

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
