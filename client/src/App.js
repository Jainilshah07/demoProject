import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Register from './pages/login/Register';
import Collection from './components/Collection';
import Footer from './components/Footer';
import Funds from './components/Funds';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/register' element={<Register />} ></Route>
          <Route exact path='/collections' element={<Collection />} ></Route>
          <Route exact path='/funds' element={<Funds />} ></Route>
          <Route exact path='/portfolio' element={<Login />} ></Route>
          {/* <Route exact path='login' element={<Login />} ></Route> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
