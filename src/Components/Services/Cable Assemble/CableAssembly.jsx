import React, { useEffect, useState } from "react";
import ban4 from "../../../Assets/images/ServicesImg/ban4.jpg";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../ServicePages.css";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import ser1 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/militry grade connectors.png";
import ser2 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/d38999 connectors.png";
import ser3 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/fibre cable.jpg";
import ser4 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/custom cable assembly.jpg";
import ser5 from "../../../Assets/images/Img-Mech-dsn/Cable Assemly/custom cable.jpg";

const CableAssembly = () => {
  const [showProducts, setShowProducts] = useState(false);
  
  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = () => {
    setShowProducts(!showProducts);
  };

  const sectionsData = [
    {
      id: "military",
      heading: "Military-Grade Connectors:",
      content:
        "We specialize in using military-grade connectors such as D38999 connectors, Micro-D connectors, and PCB mount connectors to ensure robust interconnectivity in mission-critical systems. These connectors are specifically designed to provide excellent resistance to vibration, EMI (Electromagnetic Interference), and environmental sealing for demanding defense and aerospace applications.",
      image: { src: ser1, alt: "Mechanical Assembling of 12 slot chassis" },
    },
    {
      id: "D38999-connectors",
      heading: "D38999 Connectors:",
      content:
        "Known for their reliability in military and aerospace applications, D38999 connectors are highly durable, offering superior performance in harsh environments. These connectors feature high-density contact arrangements and offer excellent resistance to shock, vibration, and fluid contamination, making them ideal for rugged military systems.",
      image: { src: ser2, alt: "Wire Harnessing for the Panel PC" },
    },
    {
      id: "fiber",
      heading: "Fiber Optic Cables:",
      content:
        "We also offer fiber optic cable assemblies that provide high-speed data transfer and are resistant to electromagnetic interference, crucial for modern defense communication systems.",
      image: { src: ser3, alt: "Wire Harnessing for the Panel PC" },
    },
    {
      id: "custom-solutions",
      heading: "Custom Solutions:",
      content:
        "Our cable assembly services are fully customizable, ensuring compatibility with your system’s requirements. We design and manufacture EMI/RFI-protected cables, high-voltage cables, and shielded cables for both defense and industrial-grade applications.",
      images: [
        { src: ser4, alt: "Custom Solution Image 1" },
        { src: ser5, alt: "Custom Solution Image 2" },
      ],
    },
    {
      id: "expertise",
      heading: "Expertise in Crimping and Soldering:",
      content:
        "Rug-Rel's team of skilled engineers and technicians are proficient in advanced crimping and soldering techniques, ensuring that every connection is secure and reliable. All assemblies undergo rigorous testing to meet MIL-STD and other military specifications.",
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
      <ServiceBanner imageUrl={ban4} heading="CABLE ASSEMBLY" />

      {/* Heading and Paragraph */}
      <Container className="my-5">
        <h1 className="fw-bold">4. Cable Assembly and Wire Harness Services</h1>
        <h3 className="fw-bold mt-5">4.1 Cable Assembly</h3>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          At Rug-Rel, we provide custom cable assembly services designed to meet
          the stringent requirements of defense and aerospace industries. Our
          cables are engineered to endure extreme conditions, including high
          temperatures, mechanical stress, and exposure to harsh environments.
          Our assemblies comply with military-grade standards, ensuring
          long-term durability and optimal performance.
        </p>
      </Container>

      {/* Line */}
      <Container>
        <div className="lineBtn my-5">
          <div className="border-line"></div>
        </div>
      </Container>

      {/* Dynamically Render Sections */}
      <Container>
        {sectionsData.map((section, index) => (
          <div key={index}>
            {/* For the last section (Expertise in Crimping), use full-width and no image */}
            {section.id === "expertise" ? (
              <Row className="full-width-section my-5">
                <Col>
                  <h2 className="fw-bold">{section.heading}</h2>
                  <p className="fs-5" style={{ textAlign: "justify" }}>
                    {section.content}
                  </p>
                </Col>
              </Row>
            ) : (
              <Row className="align-items-center my-5 pt-5">
                <Col md={6}>
                  <h2 className="fw-bold">{section.heading}</h2>
                  <p className="fs-5" style={{ textAlign: "justify" }}>
                    {section.content}
                  </p>
                </Col>

                {/* Conditionally render images */}
                <Col md={6}>
                  {section.id === "custom-solutions" ? (
                    <Row className="two-images-section">
                      {section.images.map((img, imgIndex) => (
                        <Col md={6} key={imgIndex} className="mb-3">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="img-fluid custom-image-size"
                          />
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    section.image && (
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="img-fluid single-image-size"
                      />
                    )
                  )}
                </Col>
              </Row>
            )}
          </div>
        ))}
      </Container>

      <Container>
        {/* Line and Button */}
        <div className="lineBtn my-5">
          <div className="border-line"></div>
          <Button onClick={handleButtonClick}>
            {showProducts ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* Display Related Products when "Read More" is clicked */}
        {showProducts && (
          <div className="my-4">
            <h4>Related Products</h4>
            <Row>
              {relatedProductsData.map((product, idx) => (
                <Col md={4} key={idx} className="text-center my-3">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="img-fluid mb-2 single-image-size"
                  />
                  <p>{product.title}</p>
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

export default CableAssembly;
