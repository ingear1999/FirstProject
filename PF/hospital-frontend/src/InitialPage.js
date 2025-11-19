import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style/InitialPage.css";
import img1 from "./images/imgfirst.jpg";
import img2 from "./images/imgsecond.jpg";
import img3 from "./images/imgthird.jpg";
import { FaHospitalUser, FaStethoscope, FaPhone } from "react-icons/fa";

function InitialPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="initial-page">
      <header className="header">
        <h1>Welcome to Our Hospital</h1>
        <p>Your health, our priority 💙</p>
      </header>

      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={img1} alt="Hospital view 1" /></div>
          <div><img src={img2} alt="Hospital view 2" /></div>
          <div><img src={img3} alt="Hospital view 3" /></div>
        </Slider>
      </div>

      <div className="info-cards">
        <div className="card">
          <FaHospitalUser size={32} color="#007bff" />
          <h2>Hospital Policy</h2>
          <p>Compassionate, patient-centered care with integrity and professionalism.</p>
        </div>

        <div className="card">
          <FaStethoscope size={32} color="#007bff" />
          <h2>Services Offered</h2>
          <p>General medicine, surgery, emergency, pediatrics, radiology, rehabilitation.</p>
        </div>

        <div className="card">
          <FaPhone size={32} color="#007bff" />
          <h2>Contact Us</h2>
          <p>+1 555-123-4567 | info@ourhospital.com | Emergency: 911</p>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
