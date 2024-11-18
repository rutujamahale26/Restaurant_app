import React, { Component } from 'react'
import './footer.css'


export default class Footer extends Component {
  render() {
    return (
      <>
      
      <div className="container-fluid " style={{backgroundColor:'rgb(43, 12, 12)',color:'white'}} >
  <div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex ">
      
      <div className="address mx-5">
        <h4>Address</h4>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p></p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-telephone icon"></i>
      <div>
        <h4>Contact</h4>
        <p>
          <strong>Phone:</strong> <span>+1 5589 55488 55</span><br/>
          <strong>Email:</strong> <span>info@example.com</span><br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-clock icon"></i>
      <div>
        <h4>Opening Hours</h4>
        <p>
          <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br/>
          <strong>Sunday</strong>: <span>Closed</span>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <h4 className='mx-4'>Follow Us</h4>
      <div className="social-links ">
        <ul className='d-flex '>
          <li><i className="fa-brands fa-square-twitter"></i></li>
          <li className='mx-2'><i className="fa-brands fa-linkedin "></i></li>
          <li><i className="fa-brands fa-facebook"></i></li>
          <li className='mx-2'><i className="fa-brands fa-instagram"></i></li>
        </ul>
      </div>
    </div>
   <hr/>
    
        <div className=" text-center ">
          
           <p>© <span>Copyright</span> <strong className="px-1 sitename">Delicious</strong> <span>All Rights Reserved</span></p>
           <p>Designed by <span className='text-warning'>Rutuja Mahale</span></p>
        </div>


  </div>
</div>
      
      </>
    )
  }
}
