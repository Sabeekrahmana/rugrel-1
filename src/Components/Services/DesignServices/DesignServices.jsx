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

  useEffect(() => window.scroll(0, 0),[])


  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sectionsData = [
    {
      id: "mechanical",
      heading: "MECHANICAL Services",
      content:
        "The networked battlespace is rapidly expanding and evolving and thus creating an increasing need to rapidly field systems that are smarter and faster while at the same time smaller, lighter and more cost-effective. Rugged computing solutions are vital to the military, especially as onboard computing becomes common and crucial on vehicles, field sensors, ISR missions and weapons systems. ZMicro’s rugged systems are built to withstand the combat environment using proven COTS components that are ruggedized to stand up to extreme temperatures, shock, vibration, and electromagnetic interference.",
      imgSrc: ser1,
    },
    {
      id: "fpga",
      heading: "FPGA",
      content:
        "We provide innovative solutions that are built to last. Our team ensures that each design and implementation is tailored to your unique requirements, ensuring reliability and performance in demanding environments. Our commitment to quality and service has made us the trusted choice for government and military customers around the world.",
      imgSrc: ser1,
    },
    {
      id: "pcb",
      heading: "PCB",
      content:
        "We provide innovative solutions that are built to last. Our team ensures that each design and implementation is tailored to your unique requirements, ensuring reliability and performance in demanding environments. Our commitment to quality and service has made us the trusted choice for government and military customers around the world.",
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
      <ServiceBanner 
        imageUrl={bannerImg} 
        heading="DESIGN SERVICES"
      />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="fw-bold my-4">Design Services</h2>
        <p className="fs-5">
          Technology that was initially developed for military and aerospace can
          often be repurposed in new applications in medicine, transportation,
          or even consumer goods. There are numerous benefits in doing this
          since the technology is highly reliable, readily available and easily
          adaptable.
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
                <h2 className="fw-bold mb-3" style={{ textTransform: "uppercase" }}>
                  {section.heading}
                </h2>
                <p className="fs-5" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <img src={section.imgSrc} alt={section.heading} className="img-fluid" />
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
                      <img src={product.imgSrc} alt={product.title} className="img-fluid mb-2" />
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
