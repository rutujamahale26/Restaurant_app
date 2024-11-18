import React from "react";
import "./chef.css";
import { Carousel2 } from "./Carousel2";

const Chef = () => {
  return (
    <>
      <div
        className="card_1 "
        style={{
          marginLeft: "20px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="card" style={{ width: "350px" }}>
          <img src="Assets/c1.jpg" class="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h3>Walter White</h3>
            <p className="text-secondary">Master Chef</p>
            <p className="card-text">
              Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
              tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
              corporis et voluptate.
            </p>
          </div>
        </div>
        <div className="card " style={{ width: "350px" }}>
          <img src="Assets/c2.jpg" class="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h3>Sarah Jhonson</h3>
            <p className="text-secondary">Pattiser</p>
            <p className="card-text">
              Quo esse repellendus quia id. Est eum et accusantium pariatur
              fugit nihil minima suscipit corporis. Voluptate sed quas
              reiciendis animi neque sapiente.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <img src="Assets/c3.jpg" class="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h3>William Anderson</h3>
            <p className="text-secondary">Cook</p>
            <p className="card-text">
              Vero omnis enim consequatur. Voluptas consectetur unde qui
              molestiae deserunt. Voluptates enim aut architecto porro
              aspernatur molestiae modi.
            </p>
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="blur_2">
          <div className="slide_2">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" > 
            <div class="carousel-inner">
               <div class="carousel-item active" data-bs-interval="1000">
                   <Carousel2 img='Assets/R1.jpg' name='Matt Brandon' role='Freelancer'/>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <Carousel2 img='Assets/R2.jpg' name='Saul Goodman' role='Ceo & Founder'/>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <Carousel2 img='Assets/R3.jpg' name='Sara Wilson' role='Designer'/>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                <Carousel2 img='Assets/R4.jpg' name='Jena Karlis'  role='Store Owner'/>
                </div>
            </div>
          </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
