import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ban3 from "../../../Assets/images/ServicesImg/ban3.jpg";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import pcb1 from "../../../Assets/images/Img-Mech-dsn/PCB Assembly/pcb assembly (1).jpg";
import pcb2 from "../../../Assets/images/Img-Mech-dsn/PCB Assembly/pcb assembly (2).jpg";
import pcb3 from "../../../Assets/images/Img-Mech-dsn/PCB Assembly/pcb assembly (3).jpg";


const PcbAssembly = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const pcbData = [
    { imgSrc: pcb1, title: "PCB Type 1" },
    { imgSrc: pcb2, title: "PCB Type 2" },
    { imgSrc: pcb3, title: "PCB Type 3" },
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner imageUrl={ban3} heading="PCB ASSEMBLY" />
      <Container className="my-5">
        <h1 className="fw-bold text-center mb-4">PCB Assembly Services</h1>
        <p className="text-justify mb-5">
          At Rug-Rel, we provide end-to-end PCB assembly services, including
          surface-mount technology (SMT) and through-hole technology (THT). Our
          advanced assembly processes ensure that PCBs are built to precise
          specifications, with rigorous quality control at each step to ensure
          reliability. We specialize in defense-grade PCB assembly, focusing on
          high-frequency, RF, and multi-layer boards that meet strict military
          standards. Our ESD-protected facilities guarantee the highest levels
          of safety and performance in every assembly.
        </p>

        {/* Row of 3 images */}
        <Row className="mb-4">
          {pcbData.map((pcb, index) => (
            <Col md={4} key={index} className="text-center">
              <img
                src={pcb.imgSrc}
                alt={pcb.title}
                className="img-fluid pcb-image mb-2"
              />
              {/* <h5>{pcb.title}</h5> */}
            </Col>
          ))}
        </Row>

        {/* Line and Button */}
        <div className="lineBtn my-5 text-center">
          <div className="border-line"></div>
          <Button onClick={handleButtonClick}>
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* Display Related Products when "Read More" is clicked */}
        {isExpanded && (
          <div className="my-4">
            <h4>Related Products</h4>
            <Row>
              {pcbData.map((product, idx) => (
                <Col md={4} key={idx} className="text-center my-3">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="img-fluid mb-2 pcb-image"
                  />
                  <h5>{product.title}</h5>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
      <SecondBanner />
      <Footer />
    </>
  );
};

export default PcbAssembly;
