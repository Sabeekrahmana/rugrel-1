import React from "react";
import "./ProInfo&Data.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const ProductsInfo = ({ head, sliderImages, texts, mainTitle, id }) => {
  const settings = {
    arrows: false,
    dots: false, // Optional: add dots for navigation
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <Container className="my-5 w-100 h-100" id={id}>
      <strong>
        <p className="fs-3">{mainTitle}</p>
      </strong>
      <br />
      <Row className="justify-content-center  w-100 h-100">
        <Col xs={12} sm={11} md={4} lg={4}>
          <div className="infoimg  h-100 ">
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className="d-flax justify-content-center align-items-center  h-100 w-100"
                >
                  <div className="alterpro d-flax justify-content-center align-items-center ">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className=" proimg w-100 h-100"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
        <Col xs={12} sm={11} md={8} lg={8}>
          <div className="infoData w-100 h-100 p-4">
            <h3 className="fs-4">{head}</h3>
            <hr />
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsInfo;
