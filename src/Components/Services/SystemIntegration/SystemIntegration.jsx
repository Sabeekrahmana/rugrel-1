import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import sysIntBanner from '../../../Assets/images/ServicesImg/ban4.jpg'; 
import partImg1 from '../../../Assets/images/ServicesImg/ser4.jpg'; 
import partImg2 from '../../../Assets/images/ServicesImg/ser5.jpg'; 
import partImg3 from '../../../Assets/images/ServicesImg/ser6.jpg'; 
import partImg4 from '../../../Assets/images/ServicesImg/ser7.jpg'; 
import "../ServicePages.css"; 
import SecondBanner from '../../AboutUs/BannerPage/SecondBanner';
import ServiceBanner from '../ServiceBanners/ServiceBanner';
import ban4 from "../../../Assets/images/ServicesImg/manufacture.jpg"; 
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import ser1 from "../../../Assets/images/ServicesImg/ser5.jpg";



const SystemIntegration = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const integrationSections = [
    {
      id: "part-1",
      title: "Part 1 Title",
      content: "Description of the first part of system integration. Provide detailed information about what this part includes and why it's important.",
      imgSrc: partImg1,
      imgAlt: "Part 1 Image"
    },
    {
      id: "part-2",
      title: "Part 2 Title",
      content: "Description of the second part of system integration. Provide details that help clients understand this part of the service.",
      imgSrc: partImg2,
      imgAlt: "Part 2 Image"
    },
    {
      id: "part-3",
      title: "Part 3 Title",
      content: "Description of the third part of system integration. Highlight key points and processes involved in this stage.",
      imgSrc: partImg3,
      imgAlt: "Part 3 Image"
    },
    {
      id: "part-4",
      title: "Part 4 Title",
      content: "Description of the fourth part of system integration. Explain the importance and benefits of this part to potential clients.",
      imgSrc: partImg4,
      imgAlt: "Part 4 Image"
    }
  ];

  const relatedProductsData = [
    { imgSrc: ser1, title: "Product 1" },
    { imgSrc: ser1, title: "Product 2" },
    { imgSrc: ser1, title: "Product 3" },
  ];


  return (
    <>
      <HeadNavBar />
      <ServiceBanner 
        imageUrl= {ban4}  
        heading="SYSTEM INTEGRATION"
      />
      
      {/* Heading and Paragraph */}
      <Container className="my-5">
        <h1 className="fw-bold">5.1 Sub-System & System Integration</h1>
        <p className="fs-5" style={{ textAlign: "justify" }}>
        Our system integration services involve the seamless integration of mechanical and electronic subsystems into fully operational defense systems. We provide end-to-end integration, including hardware, software, and firmware, ensuring that all components work together efficiently. We also offer testing and validation services to ensure the systems meet all necessary defense and aerospace standards.        </p>
      </Container>

      {/* Banner */}
      <div className="integrationBanner" style={{ padding: "30px 60px", margin: "40px 0", height: "300px" }}>
        <img src={sysIntBanner} alt="System Integration Banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Integration Sections */}
      <Container>
        {integrationSections.map((section, index) => (
          <div key={index}>
            <Row className="align-items-center my-5">
              <Col md={6}>
                <h2 className="fw-bold">{section.title}</h2>
                <p className="fs-5" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <img src={section.imgSrc} alt={section.imgAlt} className="img-fluid" />
              </Col>
            </Row>

            {/* Line and Button */}
            <div className="lineBtn my-5">
              <div className="border-line"></div>
              <Button onClick={() => handleButtonClick(index)}>
                {activeSection === index ? "Read Less" : "Read More"}
              </Button>
            </div>

            {/* Display Related Products directly after clicking Read More */}
            {activeSection === index && (
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
          </div>
        ))}
      </Container>
       <SecondBanner />
      <Footer />
    </>
  );
};

export default SystemIntegration;
