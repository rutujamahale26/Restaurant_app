import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="text-center">
      <h2 className="">Some photos from <span className="text-warning">Our Restaurant</span></h2>
      </div>
      <div className="container">
        <div className="photo-gallery">
          <div className="column">
            <div className="photo">
              <img src="./Assets/E3.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/E2.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/E1.jpg" alt="" />
            </div>
          </div>
          
        
          <div className="column">
            <div className="photo">
              <img src="./Assets/10017.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/E4.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/E3.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/E5.jpg" alt="" />
            </div>
          </div>

          <div className="column">
            <div className="photo">
              <img src="./Assets/b5.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/b2.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="./Assets/b3.jpg" alt="" />
            </div>
            
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default Gallery;
