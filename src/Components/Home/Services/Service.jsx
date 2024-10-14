import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import serviceImg1 from "../../../Assets/images/FPGA.webp";
import serviceImg2 from "../../../Assets/images/FPGA.webp";
import serviceImg3 from "../../../Assets/images/FPGA.webp";
import serviceImg4 from "../../../Assets/images/FPGA.webp";
import serviceImg5 from "../../../Assets/images/FPGA.webp";
import "./service.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const servicesData = [
    {
      image: serviceImg1,
      serviceName: "Design",
      serviceDescription: "Description for service one.",
    },
    {
      image: serviceImg2,
      serviceName: "Manufacturing",
      serviceDescription: "Description for service two.",
    },
    {
      image: serviceImg3,
      serviceName: "PCB Assembly Three",
      serviceDescription: "Description for service three.",
    },
    {
      image: serviceImg4,
      serviceName: "Cable assembly and wire harness",
      serviceDescription: "Description for service four.",
    },
    {
      image: serviceImg5,
      serviceName: "System Integration",
      serviceDescription: "Description for service five.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="carousel-control-next-icon" />,
    prevArrow: <div className="carousel-control-prev-icon" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container  className="services-container">
        <div className="services-header">
          <h1 className="fw-bold">SERVICES</h1>
        </div>
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="d-flex justify-content-center">
              <Card className="Pr_card service-card mx-2">
                <div className="ser-img-container">
                  <Card.Img className="ser-img" variant="top" src={service.image} />
                </div>
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{service.serviceName}</Card.Title>
                  <Card.Text className="card-description">
                    {service.serviceDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Service;

