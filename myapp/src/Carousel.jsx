import React from 'react'
import './Carousel.css'

const Carousel = (props) => {
  return (
    <>
   <div className='slide_box'>
   <img src={props.img} className="d-block w-50" alt="..." style={{marginLeft:'140px', marginTop:'70px',float:'left'}}/>
   <div className='box2'>
    <h2>{props.title}</h2>
    <h3>{props.price}</h3>
    <p className="fw-50px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <p>
              <i class="fa-solid fa-circle-check"></i>   Ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>   Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>   Ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate trideta storacalaperda mastiro dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
    
   </div>
   </div>
    </>
  )
}

export default Carousel