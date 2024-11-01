import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import Home from './public/home.jsx';
import Login from './public/login.jsx';
import Signup from './public/signup.jsx';
import {Category} from './public/category.jsx'
import { EventsCreateion } from './public/eventsCreateion.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/create' element={<EventsCreateion/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
