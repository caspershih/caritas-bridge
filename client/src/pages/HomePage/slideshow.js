import React from 'react';
import "./Home.css";
import photo1 from "./images/photogrid1.png";
import photo2 from "./images/photogrid2.png";
import photo3 from "./images/photogrid3.png";
import photo4 from "./images/photogrid4.png";

const Slideshow = () => (
    <div className="slideWrap">
        <div id="slideShow" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={photo1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={photo4} alt="Fourth slide" />
    </div>
  </div>
</div>
    </div>
    );
    
export default Slideshow;
