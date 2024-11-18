import React from 'react'
import './Carousel2.css'

export const Carousel2 = (props) => {
  return (
    <>
    <div className="swiper-slide">
              <div className="img text-center text-light" style={{marginTop:'130px'}}>
                <img src={props.img} class="testimonial-img" alt="" style={{height:'100px', width:'100px',borderRadius:'50%'}}/>
                <h3>{props.name}</h3>
                <h6  >{props.role}</h6>
                <div className="stars text-warning">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
    </>

  )
}
