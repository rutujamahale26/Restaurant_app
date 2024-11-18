import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Events from './Events';
import Chef from './Chef';
import Gallery from './Gallery';
import Contact from './Contact';


import Header from './Header';



const App = () => {
  return (
    <>
    <Router>
      
      <Routes>
      <Route path='/' element={<Header/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>} />
      <Route path='/event' element={<Events/>}/>
      <Route path='/chef' element={<Chef/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App