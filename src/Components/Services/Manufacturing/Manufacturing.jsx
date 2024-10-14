import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ban1 from "../../../Assets/images/ServicesImg/ban1.jpg"; 
import ser3 from "../../../Assets/images/ServicesImg/ser3.jpg"; 
import manBan from "../../../Assets/images/ServicesImg/manufacture.jpg"; 
import "../ServicePages.css";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import { IoMdCheckboxOutline } from "react-icons/io";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";


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
      id: "Manufacture",
      heading: "Manufacture Services",
      content:
        "Manufacture services encompass a wide range of engineering disciplines that ensure the reliability and functionality of mechanical systems in various industries. From initial design to final implementation, mechanical engineering plays a crucial role in the development of efficient and sustainable solutions.",
      imgSrc: ser3, 
    },
    {
      id: "modeling",
      heading: "Modeling",
      content:
        "Our modeling services provide detailed simulations of mechanical systems, enabling precise predictions of behavior under various conditions. This service is essential for the development of robust designs.",
      imgSrc: ser3, 
    },
    {
      id: "thermal-analysis",
      heading: "Thermal Analysis",
      content:
        "Thermal analysis services ensure that systems operate within safe temperature ranges. We analyze heat distribution and transfer to prevent overheating and optimize performance.",
      imgSrc: ser3, 
    },
    {
      id: "structural-analysis",
      heading: "Structural Analysis",
      content:
        "Our structural analysis services evaluate the strength and durability of mechanical components. This analysis is critical in designing systems that can withstand various loads and stresses.",
      imgSrc: ser3, 
    },
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner 
         imageUrl= {ban1}  
        heading="MANUFACTURE SERVICES"
      />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="fw-bold my-4">MANUFACTURE Services</h2>
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

            {/* Display details directly after clicking Read More */}
            {activeSection === index && (
              <div className="my-4">
                <h4>{section.heading} - Details</h4>
                <p>
                  More detailed content about {section.heading} can be included here to provide deeper insights into the services offered.
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

export default Manufacturig;
