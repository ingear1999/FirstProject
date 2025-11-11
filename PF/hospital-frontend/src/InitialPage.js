import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style/InitialPage.css";
import img1 from "./images/imgfirst.jpg";
import img2 from "./images/imgsecond.jpg";
import img3 from "./images/imgthird.jpg";

function InitialPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="initial-page">
      <header className="header">
        <h1>Welcome to Our Hospital System</h1>
        <p>Your health, our priority 💙</p>
      </header>

      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={img1} alt="Hospital view 1" /></div>
          <div><img src={img2} alt="Hospital view 2" /></div>
          <div><img src={img3} alt="Hospital view 3" /></div>
        </Slider>
      </div>

    </div>
  );
}

export default InitialPage;
