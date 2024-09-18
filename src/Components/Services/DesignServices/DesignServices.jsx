import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../ServicePages.css";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import ser1 from "../../../Assets/images/ServicesImg/ser1.jpg";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import bannerImg from "../../../Assets/images/ServicesImg/serviceBanner.jpg";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";

const DesignServices = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sectionsData = [
    {
      id: "mechanical",
      heading: "1.1 Mechanical Design Services",
      content:
        "Our mechanical design services are at the heart of every robust defense and aerospace system we build. Rug-Rel offers comprehensive design solutions that cover everything from conceptual modeling to the final product, ensuring that every system we create is optimized for functionality, durability, and performance in extreme conditions.",
      imgSrc: ser1,
    },
    {
      id: "fpga",
      heading: "1.2 FPGA Design Services",
      content:
        "Our FPGA design services cater to the unique needs of defense, aerospace, and industrial sectors. FPGA (Field-Programmable Gate Array) technology is critical for applications that require real-time processing, high data throughput, and flexible reconfiguration capabilities. Rug-Rel’s FPGA designs are built to handle advanced tasks such as signal processing, data encryption, and embedded computing, offering scalable solutions for defense-grade systems.We specialize in edge computing, AI/ML integration, and signal processing, ensuring that your systems remain adaptable and future-proof.",
      imgSrc: ser1,
    },
    {
      id: "pcb",
      heading: "1.3 PCB Design Services",
      content:
        " Our PCB design services provide optimized layouts for high-speed, multi-layer PCB systems tailored for defense, aerospace, and industrial applications. We ensure compliance with industry standards for signal integrity, EMI/EMC protection, and manufacturability. We design multi-layer PCBs that support complex circuitry, ensuring reliability under harsh conditions. Rug-Rel’s PCB designs are engineered for high-frequency, RF, and mixed-signal applications, delivering seamless integration in critical systems.",
      imgSrc: ser1,
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
      <ServiceBanner imageUrl={bannerImg} heading="DESIGN SERVICES" />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="my-4">
          <b>Our Services :-</b> Rug-Rel Components & Systems Pvt. Ltd.
        </h2>
        <p className="fs-5">
          At Rug-Rel Components & Systems Pvt. Ltd., we specialize in providing
          high-quality, defense-grade electronic systems and solutions. Our
          services are meticulously designed to meet the rigorous demands of
          defense, aerospace, industrial, and other high-reliability sectors.
          With cutting-edge technology and ISO-certified facilities, we deliver
          tailored solutions across multiple verticals.
        </p>
        <div className="lineBtn">
          <div className="border-line"></div>
          <Button onClick={() => handleButtonClick(null)}>Learn More</Button>
        </div>

        {/* Dynamically render sections */}
        {sectionsData.map((section, index) => (
          <div id={section.id} key={index}>
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

export default DesignServices;
