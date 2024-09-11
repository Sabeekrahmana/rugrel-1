import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Slick_Slider/Slider.css";

// import carpenter from "../../../Assets/images/ProductsImg/";
// import painting from "../../../assets/images/Slider/Painting.jpeg";
// import cleaning from "../../../assets/images/Slider/Cleaning.jpeg";
// import electrical from "../../../assets/images/Slider/Electrical.jpeg";
// import plumbing from "../../../assets/images/Slider/Plumbing.jpeg";
// import security from "../../../assets/images/Slider/security.jpeg";
// import generator from "../../../assets/images/Slider/generator.png";
// import masonwork from "../../../assets/images/Slider/mason_work.jpeg";
// import pestcontrol from "../../../assets/images/Slider/pest_control.jpeg";
// import fabrication from "../../../assets/images/Slider/fabrication.jpeg";
// import flooring from "../../../assets/images/Slider/flooring.jpeg";
// import liftmain from "../../../assets/images/Slider/lift_maintainence.jpeg";

import card1 from '../../../Assets/images/ProductsImg/pr4.jpg';
import card2 from '../../../Assets/images/ProductsImg/pr5.jpg';
import card3 from '../../../Assets/images/ProductsImg/pr2.jpg';
import card4 from '../../../Assets/images/ProductsImg/pr1.jpg';
import card5 from '../../../Assets/images/ProductsImg/pr6.jpg';
import card6 from '../../../Assets/images/ProductsImg/pr3.jpg';
import card7 from '../../../Assets/images/ProductsImg/pr7.jpg';

const Carouselslider = () => {
  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderdata = [
    {
      img: `${card1}`,
      title: "Power Supply unit",
    },

    {
      img: `${card2}`,
      title: "BackPlane",
    },
    {
      img: `${card3}`,
      title: "Rugged Display Solutions",
    },
    {
      img: `${card4}`,
      title: "Radar Computer and ATR",
    },
    {
      img: `${card5}`,
      title: "Dual Monitor Console",
    },
    {
      img: `${card6}`,
      title: "Servers and Workstations",
    },
    {
      img: `${card7}`,
      title: "Rugged PC's",
    },
  ];

  return (
    <div className="bg-color">
      <div className="service_slider">
        <h1 className="service_slider_heading">PRODUCTS</h1>
        <Slider className="" {...settings}>
          {sliderdata.map((data, k) => (
            <div key={k} className="slideContainer">
              <img className="Slider-img " src={data.img} alt="" />
              <div className="overlay">
                <span className="service_slider_title">{data.title}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carouselslider;
