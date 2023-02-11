import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='login' element={<Login />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
