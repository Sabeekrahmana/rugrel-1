import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import serviceImg1 from "../../../Assets/images/Img-Mech-dsn/des.jpg";
import serviceImg2 from "../../../Assets/images/Img-Mech-dsn/proto.jpg";
import serviceImg3 from "../../../Assets/images/Img-Mech-dsn/pcb (1).jpeg";
import serviceImg4 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/cable_Asseble-wire.jpeg";
import serviceImg5 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/system-integration.jpg";
import "./service.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const servicesData = [
    {
      image: serviceImg1,
      serviceName: "Design Services",
      serviceDescription: "At Rug-Rel Components & Systems Pvt. Ltd., we specialize in providing high-quality, defense-grade electronic systems and solutions. Our services are meticulously designed to meet the rigorous demands of defense, aerospace, industrial, and other high-reliability sectors. With cutting-edge technology and ISO-certified facilities, we deliver tailored solutions across multiple verticals.",
    },
    {
      image: serviceImg2,
      serviceName: "Manufacturing",
      serviceDescription: "Manufacture engineering services are critical in ensuring that mechanical systems are efficient, reliable, and sustainable. Our team offers comprehensive services in modeling, thermal analysis, and structural analysis.",
    },
    {
      image: serviceImg3,
      serviceName: "PCB Assembly Three",
      serviceDescription: "At Rug-Rel, we provide end-to-end PCB assembly services, including surface-mount technology (SMT) and through-hole technology (THT). Our advanced assembly processes ensure that PCBs are built to precise specifications, with rigorous quality control at each step to ensure reliability. We specialize in defense-grade PCB assembly, focusing on high-frequency, RF, and multi-layer boards that meet strict military standards. Our ESD-protected facilities guarantee the highest levels of safety and performance in every assembly.",
    },
    {
      image: serviceImg4,
      serviceName: "Cable assembly and wire harness",
      serviceDescription: "At Rug-Rel, we provide custom cable assembly services designed to meet the stringent requirements of defense and aerospace industries. Our cables are engineered to endure extreme conditions, including high temperatures, mechanical stress, and exposure to harsh environments. Our assemblies comply with military-grade standards, ensuring long-term durability and optimal performance.",
    },
    {
      image: serviceImg5,
      serviceName: "System Integration",
      serviceDescription: "Our system integration services involve the seamless integration of mechanical and electronic subsystems into fully operational defense systems. We provide end-to-end integration, including hardware, software, and firmware, ensuring that all components work together efficiently. We also offer testing and validation services to ensure the systems meet all necessary defense and aerospace standards.",
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

