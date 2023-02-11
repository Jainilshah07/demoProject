import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Do from './components/Do';

function App() {
  return (
    <div className="App bg-red-300 text-7xl font-bold">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='login' element={<Login />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
