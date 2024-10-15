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
<<<<<<< HEAD
          <img src={carimg1} alt="car-img" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg2} alt="car-img" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg3} alt="car-img" className="carouselimg" />
=======
          <img src={carimg1} alt="" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg2} alt="" className="carouselimg" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carimg3} alt="" className="carouselimg" />
>>>>>>> 9738d943e1003ccf8306c89c4343effbed362385
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
