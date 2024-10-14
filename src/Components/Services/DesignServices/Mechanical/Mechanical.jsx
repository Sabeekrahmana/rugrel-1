import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ban1 from "../../../../Assets/images/ServicesImg/ban1.jpg";
import "../../ServicePages.css";
import ServiceBanner from "../../ServiceBanners/ServiceBanner";
import SecondBanner from "../../../AboutUs/BannerPage/SecondBanner";
import HeadNavBar from "../../../HEADER/HeadNavBar";
import Footer from "../../../FOOTER/Footer";
import manBan from "../../../../Assets/images/ServicesImg/manufacture.jpg";
import mech1 from "../../../../Assets/images/Img-Mech-dsn/mech (1).jpeg";
import mech2 from "../../../../Assets/images/Img-Mech-dsn/mech (2).jpeg";
import mech3 from "../../../../Assets/images/Img-Mech-dsn/mech (3).jpeg";
import mech8 from "../../../../Assets/images/Img-Mech-dsn/mech (8).jpeg";
import mech9 from "../../../../Assets/images/Img-Mech-dsn/mech (9).jpeg";

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
      images: [
        { src: mech1, alt: "Mechanical Model Design", title: "Mechanical Model Design" },
        { src: mech3, alt: "3D Modeling Process", title: "3D Modeling Process" },
      ],
    },
    {
      id: "thermal-analysis",
      heading: "1.1.2 Thermal Analysis Services",
      content:
        "Effective heat dissipation is crucial in defense electronics. Our thermal analysis services ensure that systems maintain optimal operating temperatures under the most extreme conditions.",
      images: [
        { src: mech8, alt: "Thermal Simulation", title: "Thermal Simulation" },
        { src: mech9, alt: "Heat Dissipation Analysis", title: "Heat Dissipation Analysis" },
      ],
    },
    {
      id: "structural-analysis",
      heading: "1.1.3 Structural Analysis Services",
      content:
        "Rug-Rel’s structural analysis services guarantee that all mechanical systems can withstand the stresses and strains of high-demand applications. We use advanced simulation techniques to evaluate load-bearing capabilities, material durability, and structural integrity, ensuring compliance with defense standards like MIL-STD-810.",
      images: [
        { src: mech8, alt: "Thermal Simulation", title: "Thermal Simulation" },
        { src: mech9, alt: "Heat Dissipation Analysis", title: "Heat Dissipation Analysis" },
      ],
    },
  ];

  const relatedProductsData = [
    { imgSrc: mech1, title: "Product 1" },
    { imgSrc: mech2, title: "Product 2" },
    { imgSrc: mech3, title: "Product 3" },
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
          final product.
        </p>

        <div className="manufactureBanner" style={{ margin: "40px 0", height: "300px" }}>
          <img src={manBan} alt="" />
        </div>

        {sectionsData.map((section, index) => (
          <div key={index} id={section.id}>
            <Row className="my-5">
              <Col md={6}>
                <h2 className="fw-bold mb-3" style={{ textTransform: "uppercase" }}>
                  {section.heading}
                </h2>
                <p className="fs-10" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <Row>
                  {section.images.map((img, imgIndex) => (
                    <Col md={6} className="mb-3" key={imgIndex}>
                      <img src={img.src} alt={img.alt} className="img-fluid mechanical-image" />
                      <p className="text-center mt-2">{img.title}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            <div className="lineBtn my-5">
              <div className="border-line"></div>
              <Button onClick={() => handleButtonClick(index)}>
                {activeSection === index ? "Read Less" : "Read More"}
              </Button>
            </div>

            {activeSection === index && (
              <div className="my-4">
                <h4>Related Products</h4>
                <Row>
                  {relatedProductsData.map((product, idx) => (
                    <Col md={4} key={idx} className="text-center my-3">
                      <img src={product.imgSrc} alt={product.title} className="img-fluid mb-2 mechanical-image" />
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
