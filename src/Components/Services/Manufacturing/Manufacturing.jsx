import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ban1 from "../../../Assets/images/ServicesImg/ban1.jpg"; 
import manBan from "../../../Assets/images/ServicesImg/ser8.jpg"; 
import "../ServicePages.css";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import proto from "../../../Assets/images/Img-Mech-dsn/proto.jpg";
import mass from "../../../Assets/images/Img-Mech-dsn/mass.jpg";



const Manufacturig = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => window.scroll(0, 0),[])


  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const ManufactureServices = [
    "Component Engineering and Procurement",
    "PCB Manufacturing (2 to 20 layers, Impedance controlled, 4/4 mil, IND/MIL, blind, buried vias)",
    "PCB Assembly (Through-hole, SMD, BGA, manual, automated reflow)",
    "Test Bench, Test Jig Development for production testing",
    "Product Enclosure and Cabinet Manufacturing",
    "Product Packaging Design and Manufacturing",
    "Shipment Packaging",
    "Precision Sheet Metal Fabrication",
    "Machined Components",
    "Metal Additive Manufacturing",
    "Metal Stamping",
  ];

  const sectionsData = [
    {
      id: "prototype",
      heading: "2.1 Prototype Manufacturing",
      content:
        "Rug-Rel offers rapid prototype manufacturing services, ensuring that initial designs meet all operational and environmental criteria. Our in-house team uses state-of-the-art manufacturing techniques to produce prototypes that adhere to defense and aerospace standards. Prototyping includes PCB assembly, cable harnessing, and mechanical components, enabling you to test and validate your designs in real-world conditions before committing to large-scale production.",
      imgSrc: proto, 
    },
    {
      id: "mass-volume",
      heading: "2.2 Mass & Volume Production",
      content:
        "Our mass production services are designed to meet large-scale production demands while maintaining the highest quality standards. With advanced CNC machinery, laser cutting, and PCB assembly capabilities, Rug-Rel can handle the production of complex, high-precision electronic systems for defense and industrial applications. We ensure that every product meets ISO 9001 standards, and our scalable production processes allow us to handle both small batches and large orders efficiently.",
      imgSrc: mass, 
    }
  ];

  const relatedProductsData = [
    { imgSrc: proto, title: "Product 1" },
    { imgSrc: proto, title: "Product 2" },
    { imgSrc: proto, title: "Product 3" },
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner 
         imageUrl= {ban1}  
        heading="MANUFACTURE SERVICES"
      />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="fw-bold my-4">2. Manufacturing Services</h2>
        <p className="fs-5">
          Manufacture engineering services are critical in ensuring that mechanical systems are efficient, reliable, and sustainable. Our team offers comprehensive services in modeling, thermal analysis, and structural analysis.
        </p>

        <div className="manufactureBanner" style={{ margin: "40px 0", height: "300px", backgroundColor: "#f5f5f5" }}>
          <img src={manBan} alt="" />
        </div>

         {/* Heading and Description */}
         <h2 className="fw-bold my-4">Rug-Rel offers a complete range of Electronic Manufacturing services.</h2>
        <p className="fs-3">
          Our services include:
        </p>

        {/* Services List */}
        <ul className="list-unstyled fs-5">
          {ManufactureServices.map((service, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              <IoMdCheckboxOutline className="text-success me-2 mt-1" /> {service}
            </li>
          ))}
        </ul>

        {/* Dynamically render sections */}
        {sectionsData.map((section, index) => (
          <div key={index} id={`section-${index}`}>
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
                <img src={section.imgSrc} alt={section.heading} className="img-fluid my-5 single-image-size " />
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

export default Manufacturig;
