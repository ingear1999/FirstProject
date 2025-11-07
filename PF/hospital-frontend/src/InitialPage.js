import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InitialPage.css";
import img1 from "./images/imgfirst.jpg";
import img2 from "./images/imgsecond.jpg";
import img3 from "./images/imgthird.jpg";

function InitialPage() {
  const settings = {
    dots: true,  // show small dots at the bottom
    infinite: true, // loop slides infiniteky
    speed: 800, // transition speed in ms
    slidesToShow: 1, // show one slide at a time
    slidesToScroll: 1, // scroll one slide at a time
    autoplay: true, // enable auto play
    autoplaySpeed: 2500, // auto play speed in ms
    pauseOnHover: true,// pause auto play on hover
    arrows: true, // show next/prev arrows
  };

  return (
    <div className="initial-page">
      <header className="header">
        <h1> Welcome to Our Hospital System</h1>
        <p>Your health, our priority 💙</p>
      </header>

      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={img1} alt="Hospital view 1" /></div>
          <div><img src={img2} alt="Hospital view 2" /></div>
          <div><img src={img3} alt="Hospital view 3" /></div>
        </Slider>
      </div>

      <div className="buttons">
        <a href="/login" className="btn">Login</a>
        <a href="/signup" className="btn">Sign Up</a>
      </div>
    </div>
  );
}

export default InitialPage;
