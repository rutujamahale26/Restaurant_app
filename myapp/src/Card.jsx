import React from 'react'

import './Card.css'

const Card = props => {
  return (
    <>
    <div className='box' >
        <img src={props.img} alt='' className='img-fluid'style={{height:'200px',width:'200px'} } />
        <h3>{props.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur </p>
        <h3 className='text-danger fw-bold'>{props.price}</h3>

    </div>
    
    </>
  )
}



export default Card