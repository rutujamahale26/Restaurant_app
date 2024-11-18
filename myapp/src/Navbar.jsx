import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light text-secondary px-5 '>
        <a href='/' className='navbar-brand  text-center'><h1 className='text-dark'>Yummy<span style={{color:'red'}}>.</span></h1></a>
        <ul className='navbar-nav m-auto'>
            <li className='nav-item'>
                <NavLink to='/' className='nav-link '>Home</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink to='/about' className='nav-link '>About</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink to='/menu' className='nav-link '>Menu</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink to='/event' className='nav-link '>Events</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink to='/chef' className='nav-link '>Chef</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink to='/gallery' className='nav-link '>Gallery</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
            </li>
            
        </ul>
        <button className='btn btn-danger text-center '  style={{borderRadius:'25px', width:'140px', fontSize:'15px' }}>Book A Table</button>
    </nav>
    
    </>
  )
}

export default Navbar;