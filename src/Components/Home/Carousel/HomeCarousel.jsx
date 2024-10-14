import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carimg1 from "../../../Assets/images/Carouselimg/c4.jpg";
import carimg2 from "../../../Assets/images/Carouselimg/c2.jpg";
import carimg3 from "../../../Assets/images/Carouselimg/c3.jpeg";

const HomeCarousel = () => {
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={carimg1} alt="car-img" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg2} alt="car-img" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg3} alt="car-img" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
