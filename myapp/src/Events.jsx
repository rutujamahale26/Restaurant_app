import React from 'react'
import './Event.css'
import Carousel from './Carousel'

const Events = () => {
  return (
    <>
    <div className='fix'>
      <div className='blur'>
      <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="10000">
    <Carousel
      title='Private Parties'
      img='Assets/E2.jpg'
      price='$110'/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Carousel
      title='Custome Parties'
      img='Assets/E3.jpg'
      price='$210'/>
    </div>
    <div class="carousel-item">
      <Carousel
      title='Birthday Parties'
      img='Assets/E4.jpg'
      price='$99'/>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
{/* ********************************************************************** */}


    </>
  )
}

export default Events