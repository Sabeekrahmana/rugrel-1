import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import partImg1 from '../../../Assets/images/ServicesImg/ser4.jpg';
import partImg2 from '../../../Assets/images/ServicesImg/ser5.jpg';
import partImg3 from '../../../Assets/images/Img-Mech-dsn/Cable Assemly/system-integration.jpg';
import '../ServicePages.css';
import SecondBanner from '../../AboutUs/BannerPage/SecondBanner';
import ServiceBanner from '../ServiceBanners/ServiceBanner';
import ban4 from "../../../Assets/images/ServicesImg/manufacture.jpg";
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';

const SystemIntegration = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const relatedProductsData = [
    { imgSrc: partImg1, title: "Related Product 1" },
    { imgSrc: partImg2, title: "Related Product 2" },
    { imgSrc: partImg3, title: "Related Product 3" }
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner imageUrl={ban4} heading="SYSTEM INTEGRATION" />

      <Container className="my-5">
        <h1 className="fw-bold mb-4">5.1 Sub-System & System Integration</h1>
        <p className="text-justify mb-5">
          Our system integration services involve the seamless integration of mechanical and electronic subsystems into fully operational defense systems. We provide end-to-end integration, including hardware, software, and firmware, ensuring that all components work together efficiently. We also offer testing and validation services to ensure the systems meet all necessary defense and aerospace standards.
        </p>

        {/* Main Image Above Description */}
        {/* <Row className="my-5">
          <Col md={12} className="text-center">
            <img
              src={sysIntBanner}
              alt="System Integration"
              className="img-fluid mb-4"
            />
          </Col>
        </Row> */}

        {/* 3 Images in a Row */}
        <Row className="text-center my-5">
          <Col md={4}>
            <img src={partImg1} alt="Part 1" className="img-fluid mb-3" />
            <h5>Part 1 Title</h5>
          </Col>
          <Col md={4}>
            <img src={partImg2} alt="Part 2" className="img-fluid mb-3" />
            <h5>Part 2 Title</h5>
          </Col>
          <Col md={4}>
            <img src={partImg3} alt="Part 3" className="img-fluid mb-3" />
            <h5>Part 3 Title</h5>
          </Col>
        </Row>

        {/* Line and Button */}
        <div className="lineBtn my-5">
          <div className="border-line"></div>
          <Button onClick={() => handleButtonClick(0)}>
            {activeSection === 0 ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* Related Products */}
        {activeSection === 0 && (
          <div className="my-4">
            <h4>Related Products</h4>
            <Row>
              {relatedProductsData.map((product, idx) => (
                <Col md={4} key={idx} className="text-center my-3">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="img-fluid mb-2"
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

export default SystemIntegration;
