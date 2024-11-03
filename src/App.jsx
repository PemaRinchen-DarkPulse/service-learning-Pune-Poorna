import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import Home from './public/home.jsx';
import Login from './public/login.jsx';
import Signup from './public/signup.jsx';
import {Category} from './public/category.jsx'
import { EventsCreateion } from './public/eventsCreateion.jsx';
import ViewAllEvents from './public/ViewAllEvents.jsx';
import { NavComponent } from './components/navbar/navComponents.jsx';
import Footer from './components/footer/footer.jsx';
import EventDetails from './public/EventDetails.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavComponent/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/create' element={<EventsCreateion/>}></Route>
        <Route path='/viewall/:eventType' element={<ViewAllEvents />} />
        <Route path='/eventDetails/:id' element={<EventDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
