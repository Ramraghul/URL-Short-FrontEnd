import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './Components/Portal';
import Card from './Components/allCard/Card'
import HomeCard from './Components/homeCard/HomeCard'
import Login from './Components/Auth/Login/Login';
import './App.css'
import Signup from './Components/Auth/Signup/Signup';
import Recovery from './Components/Auth/Recovery/Recovery';
import Activate from './Components/Auth/AccActivate/Activate';
import Update from './Components/Auth/Update/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* Auth */}
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Signup/>}/>
      <Route path='/Activate/:id' element={<Activate/>}/>
      <Route path='/Recovery' element={<Recovery/>}/>
      <Route path='/Update/:id/:token' element={<Update/>}/>

      {/* Home */}
      <Route path='/Home' element ={<Portal/>}>
        <Route index element={<HomeCard/>}/>
        <Route path='Card' element={<Card/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
