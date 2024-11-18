import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <h1 className="text-center" data-aos="zoom-in">
        Learn More <span className="text-danger">About Us</span>
      </h1>
      <div className="img mt-5" data-aos="fade-up">
        <img
          src="./Assets/table.jpg" alt=""
          className="img-fluid"
          style={{
            height: "530px",
            width: "550px",
            marginLeft: "60px",
            float: "left",
          }}
        />
        
        <div className=" content">
          <p className="text-secondary fw-50px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <p>
              <i class="fa-solid fa-circle-check"></i>Ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </p>
            <p>
              <i class="fa-solid fa-circle-check"></i>Ullamco laboris nisi ut
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
          {/* <div className="vedio" data-aos="fade-left">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7f98aduVJ8?si=WfAlGfBvf3HiNOyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div> */}
        </div>
        <div className="box1 text-center mt-2" data-aos="fade-up-left" >
        <h3 className="fw-bold mt-2">Book a Table</h3>
        <h4 className="text-danger fw-bold">+1 5589 55488 55</h4>
      </div>
      </div>
     
    </>
  );
}

export default About;
