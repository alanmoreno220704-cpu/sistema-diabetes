
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Equipo from './pages/Equipo/Equipo';
import Crud from './pages/crud/Crud';
import Mainlayout from './layout/MainLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';


function App() {

  return (
    <Router>
      <Mainlayout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Equipo" element={<Equipo/>} />
          <Route path="/crud" element={<Crud />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Mainlayout>
    </Router>

  )
}

export default App
