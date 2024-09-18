import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ban1 from "../../../../Assets/images/ServicesImg/ban1.jpg";
import ser3 from "../../../../Assets/images/ServicesImg/ser3.jpg";
import "../../ServicePages.css";
import ServiceBanner from "../../ServiceBanners/ServiceBanner";
import SecondBanner from "../../../AboutUs/BannerPage/SecondBanner";
import HeadNavBar from "../../../HEADER/HeadNavBar";
import Footer from "../../../FOOTER/Footer";
import manBan from "../../../../Assets/images/ServicesImg/manufacture.jpg";
import ser1 from "../../../../Assets/images/ServicesImg/ser1.jpg";


const Mechanical = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sectionsData = [
    {
      id: "modeling",
      heading: "1.1.1 Model Design Services",
      content:
        "At Rug-Rel, we develop precision 3D models using advanced software tools. These models allow us to simulate and refine mechanical components, ensuring accuracy and efficiency in the design phase. This helps prevent costly errors and reduces lead times when transitioning from design to manufacturing.",
      imgSrc: ser3,
    },
    {
      id: "thermal-analysis",
      heading: "1.1.2 Thermal Analysis Services",
      content:
        "Effective heat dissipation is crucial in defense electronics. Our thermal analysis services ensure that systems maintain optimal operating temperatures under the most extreme conditions. We use state-of-the-art tools to simulate thermal performance, identify potential hotspots, and optimize component placement to maximize cooling efficiency.",
      imgSrc: ser3,
    },
    {
      id: "structural-analysis",
      heading: "1.1.3 Structural Analysis Services",
      content:
        "Rug-Rel’s structural analysis services guarantee that all mechanical systems can withstand the stresses and strains of high-demand applications. We use advanced simulation techniques to evaluate load-bearing capabilities, material durability, and structural integrity, ensuring compliance with defense standards like MIL-STD-810.",
      imgSrc: ser3,
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
      <ServiceBanner imageUrl={ban1} heading="MECHANICAL SERVICES" />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="fw-bold my-4">1.1 Mechanical Design Services</h2>
        <p className="fs-5">
          Our mechanical design services are at the heart of every robust
          defense and aerospace system we build. Rug-Rel offers comprehensive
          design solutions that cover everything from conceptual modeling to the
          final product, ensuring that every system we create is optimized for
          functionality, durability, and performance in extreme conditions.{" "}
        </p>

        <div
          className="manufactureBanner"
          style={{
            margin: "40px 0",
            height: "300px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <img src={manBan} alt="" />
        </div>

        {/* Dynamically render sections */}
        {sectionsData.map((section, index) => (
          <div key={index} id={section.id}>
            <Row className="my-5">
              <Col md={6}>
                <h2
                  className="fw-bold mb-3"
                  style={{ textTransform: "uppercase" }}
                >
                  {section.heading}
                </h2>
                <p className="fs-5" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <img
                  src={section.imgSrc}
                  alt={section.heading}
                  className="img-fluid"
                />
              </Col>
            </Row>

            {/* Line and Button after each section */}
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

export default Mechanical;
