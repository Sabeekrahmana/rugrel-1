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
import ser1 from "../../../Assets/images/ServicesImg/ser7.jpg";


const CableAssembly = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sectionsData = [
    {
      id: "military",
      heading: "Military-Grade Connectors:",
      content: "We specialize in using military-grade connectors such as D38999 connectors, Micro-D connectors, and PCB mount connectors to ensure robust interconnectivity in mission-critical systems. These connectors are specifically designed to provide excellent resistance to vibration, EMI (Electromagnetic Interference), and environmental sealing for demanding defense and aerospace applications.",
      images: [
        { src: ser4, alt: "Mechanical Assembling of 12 slot chassis", title: "Mechanical Assembling of 12 slot chassis" },
        { src: ser4, alt: "Mechanical assembling of power control panel chassis", title: "Mechanical assembling of power control panel chassis" }
      ]
    },
    {
      id: "D38999-connectors",
      heading: " D38999 Connectors:",
      content: "Known for their reliability in military and aerospace applications, D38999 connectors are highly durable, offering superior performance in harsh environments. These connectors feature high-density contact arrangements and offer excellent resistance to shock, vibration, and fluid contamination, making them ideal for rugged military systems.",
      images: [
        { src: ser4, alt: "Wire Harnessing for the Panel PC", title: "Wire Harnessing for the Panel PC" },
        { src: ser4, alt: "Wiring on 38U cabinet", title: "Wiring on 38U cabinet" }
      ]
    },
    {
      id: "fiber",
      heading: "Fiber Optic Cables::",
      content: "We also offer fiber optic cable assemblies that provide high-speed data transfer and are resistant to electromagnetic interference, crucial for modern defense communication systems.",
      images: [
        { src: ser4, alt: "Wire Harnessing for the Panel PC", title: "Wire Harnessing for the Panel PC" },
        { src: ser4, alt: "Wiring on 38U cabinet", title: "Wiring on 38U cabinet" }
      ]
    },
    {
      id: "custom-solutions",
      heading: "Custom Solutions: ",
      content: " Our cable assembly services are fully customizable, ensuring compatibility with your system’s requirements. We design and manufacture EMI/RFI-protected cables, high-voltage cables, and shielded cables for both defense and industrial-grade applications.",
      images: [
        { src: ser4, alt: "Wire Harnessing for the Panel PC", title: "Wire Harnessing for the Panel PC" },
        { src: ser4, alt: "Wiring on 38U cabinet", title: "Wiring on 38U cabinet" }
      ]
    },
    {
      id: "expertise",
      heading: "Expertise in Crimping and Soldering:  ",
      content: " Rug-Rel's team of skilled engineers and technicians are proficient in advanced crimping and soldering techniques, ensuring that every connection is secure and reliable. All assemblies undergo rigorous testing to meet MIL-STD and other military specifications.",
      images: [
        { src: ser4, alt: "Wire Harnessing for the Panel PC", title: "Wire Harnessing for the Panel PC" },
        { src: ser4, alt: "Wiring on 38U cabinet", title: "Wiring on 38U cabinet" }
      ]
    },
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
        heading="CABLE ASSEMBLY"
      />
    
      {/* Heading and Paragraph */}
      <Container className="my-5">
        <h1 className="fw-bold">4. Cable Assembly and Wire Harness Services</h1>
        <h3 className="fw-bold mt-5">4.1 Cable Assembly</h3>
        <p className="fs-5" style={{ textAlign: "justify" }}>
        At Rug-Rel, we provide custom cable assembly services designed to meet the stringent requirements of defense and aerospace industries. Our cables are engineered to endure extreme conditions, including high temperatures, mechanical stress, and exposure to harsh environments. Our assemblies comply with military-grade standards, ensuring long-term durability and optimal performance.
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

export default CableAssembly;
