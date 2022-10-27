import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Register } from './components/Register';
import { SignIn } from './components/SignIn';
import { Videos } from './components/Videos';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <nav>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<Register />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/videos' element={<Videos />}/>
      </Routes>
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
