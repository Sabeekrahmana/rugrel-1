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
import rel1 from "../../../Assets/images/AllproductsImages/BackplaneImg/Backplane/15slot 6u.png";
import rel2 from "../../../Assets/images/AllproductsImages/RadarComputerImg/ATR (3).png";
import rel3 from "../../../Assets/images/AllproductsImages/RugDisplayImg/RDS (10).png";
import { useNavigate } from "react-router-dom";

const Manufacturig = () => {
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => window.scroll(0, 0), []);

  const handleButtonClick = () => {
    setShowProducts(!showProducts);
  };

  const navigate = useNavigate();

  const handleProductClick = (productLink) => {
    navigate(productLink); // navigate to the respective product page
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
        "Rug-Rel offers rapid prototype manufacturing services, ensuring that initial designs meet all operational and environmental criteria...",
      imgSrc: proto,
    },
    {
      id: "mass-volume",
      heading: "2.2 Mass & Volume Production",
      content:
        "Our mass production services are designed to meet large-scale production demands while maintaining the highest quality standards...",
      imgSrc: mass,
    },
  ];

  const relatedProductsData = [
    { imgSrc: rel1, title: "BackPlane", link: "/backplane" },
    { imgSrc: rel2, title: "Radar Computer", link: "/radar-computer" },
    { imgSrc: rel3, title: "Rugged Display Solutions", link: "/rug-display-solutions" },
  ];

  return (
    <>
      <HeadNavBar />
      <ServiceBanner imageUrl={ban1} heading="MANUFACTURE SERVICES" />
      <Container style={{ padding: "30px 60px" }} className="my-4">
        <h2 className="fw-bold my-4">2. Manufacturing Services</h2>
        <p className="fs-5">
          Manufacture engineering services are critical in ensuring that
          mechanical systems are efficient, reliable, and sustainable. Our team
          offers comprehensive services in modeling, thermal analysis, and
          structural analysis.
        </p>

        <div
          className="manufactureBanner"
          style={{ margin: "40px 0", height: "300px", backgroundColor: "#f5f5f5" }}
        >
          <img src={manBan} alt="" />
        </div>

        {/* Heading and Description */}
        <h2 className="fw-bold my-4">
          Rug-Rel offers a complete range of Electronic Manufacturing services.
        </h2>
        <p className="fs-3">Our services include:</p>

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
                <img
                  src={section.imgSrc}
                  alt={section.heading}
                  className="img-fluid my-5 single-image-size"
                />
              </Col>
            </Row>
          </div>
        ))}

        {/* Line and Button after all sections */}
        <div className="lineBtn my-5">
          <div className="border-line"></div>
          <Button onClick={handleButtonClick}>
            {showProducts ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* Display Related Products directly after clicking Read More */}
        {showProducts && (
  <div className="my-4">
    <h4>Related Products</h4>
    <Row>
      {relatedProductsData.map((product, idx) => (
        <Col
          md={4}
          key={idx}
          className="text-center my-3"
          onClick={() => handleProductClick(product.link)} // onClick for navigation
          style={{ cursor: "pointer" }}
        >
          <div className="product-container">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="img-fluid product-image"
            />
            <h5>{product.title}</h5>
          </div>
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

export default Manufacturig;
