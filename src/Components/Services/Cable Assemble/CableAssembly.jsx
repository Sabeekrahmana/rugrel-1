import React, { useEffect, useState } from 'react';
import ban4 from "../../../Assets/images/ServicesImg/ban4.jpg"; 
import ServiceBanner from '../ServiceBanners/ServiceBanner';
import SecondBanner from '../../AboutUs/BannerPage/SecondBanner';
import { Container, Row, Col, Button } from 'react-bootstrap';
import manBan from "../../../Assets/images/ServicesImg/manufacture.jpg"; 
import ser4 from "../../../Assets/images/ServicesImg/ser4.jpg";
import "../ServicePages.css";
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';

const CableAssembly = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sectionsData = [
    {
      id: "mechanical-unit-assembly",
      heading: "Mechanical Unit Assembly",
      content: "Description of the mechanical unit assembly services, detailing the process, expertise, and types of units assembled. This section is informative to help potential clients understand what you offer.",
      images: [
        { src: ser4, alt: "Mechanical Assembling of 12 slot chassis", title: "Mechanical Assembling of 12 slot chassis" },
        { src: ser4, alt: "Mechanical assembling of power control panel chassis", title: "Mechanical assembling of power control panel chassis" }
      ]
    },
    {
      id: "wire-harnessing",
      heading: "Wire Harnessing",
      content: "We offer excellent expertise in wire harnessing for MILL grade and Industrial units. Wiring schematic is designed in accordance with the customer specification and harnessing is performed to precisely meet the specification.",
      images: [
        { src: ser4, alt: "Wire Harnessing for the Panel PC", title: "Wire Harnessing for the Panel PC" },
        { src: ser4, alt: "Wiring on 38U cabinet", title: "Wiring on 38U cabinet" }
      ]
    }
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner 
        imageUrl= {ban4}  
        heading="CABLE ASSEMBLY"
      />
    
      {/* Heading and Paragraph */}
      <Container className="my-5">
        <h1 className="fw-bold">Cable Assembly</h1>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          Here you can provide a detailed description of the cable assembly services you offer. This could include the types of cables you assemble, the industries you serve, and the benefits of working with your company.
        </p>
      </Container>

      {/* Manufacture Banner */}
      <div className="manufactureBanner" style={{ padding: "30px 60px", margin: "40px 0", height: "300px" }}>
        <img src={manBan} alt="Manufacture Banner" />
      </div>

      {/* Dynamically Render Sections */}
      <Container>
        {sectionsData.map((section, index) => (
          <div key={index}>
            <Row className="align-items-center my-5 pt-5">
              <Col md={6}>
                <h2 className="fw-bold">{section.heading}</h2>
                <p className="fs-5" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <Row>
                  {section.images.map((img, imgIndex) => (
                    <Col md={6} className="mb-3" key={imgIndex}>
                      <img src={img.src} alt={img.alt} className="img-fluid" />
                      <p className="text-center mt-2">{img.title}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            {/* Line and Button */}
            <div className="lineBtn my-5">
              <div className="border-line"></div>
              <Button onClick={() => handleButtonClick(index)}>
                {activeSection === index ? "Read Less" : "Read More"}
              </Button>
            </div>

            {/* Additional Content */}
            {activeSection === index && (
              <div className="my-4">
                <h4>{section.heading} - More Details</h4>
                <p>
                  Additional information about {section.heading} can be provided here for more insights.
                </p>
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

export default CableAssembly;
