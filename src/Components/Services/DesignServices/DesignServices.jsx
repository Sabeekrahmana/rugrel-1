import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // for navigation
import "../ServicePages.css";
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import bannerImg from "../../../Assets/images/ServicesImg/serviceBanner.jpg";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import des from "../../../Assets/images/Img-Mech-dsn/des.jpg";
import des2 from "../../../Assets/images/Img-Mech-dsn/FPGA.webp";
import des3 from "../../../Assets/images/Img-Mech-dsn/pcb.jpg";
import rel1 from "../../../Assets/images/AllproductsImages/PowerUpplyImg/all3u/PSU3U5.png";
import rel2 from "../../../Assets/images/AllproductsImages/PowerUpplyImg/StanandCoustm/coustom (5).png";
import rel3 from "../../../Assets/images/AllproductsImages/PowerUpplyImg/all6u/PSU6U (7).png";
// import rel1 from "../../../Assets/images/AllproductsImages/PowerUpplyImg/all3u/PSU3U5.png";

const DesignServices = () => {
  const [showRelatedProducts, setShowRelatedProducts] = useState(false);
  const navigate = useNavigate(); // to navigate to product pages

  useEffect(() => window.scroll(0, 0), []);

  const handleProductClick = (productLink) => {
    navigate(productLink); // navigate to the respective product page
  };

  const sectionsData = [
    {
      id: "mechanical",
      heading: "1.1 Mechanical Design Services",
      content:
        "Our mechanical design services are at the heart of every robust defense and aerospace system we build...",
      imgSrc: des,
    },
    {
      id: "fpga",
      heading: "1.2 FPGA Design Services",
      content:
        "Our FPGA design services cater to the unique needs of defense, aerospace, and industrial sectors...",
      imgSrc: des2,
    },
    {
      id: "pcb",
      heading: "1.3 PCB Design Services",
      content:
        "Our PCB design services provide optimized layouts for high-speed, multi-layer PCB systems...",
      imgSrc: des3,
    },
  ];

  const relatedProductsData = [
    { imgSrc: rel1, title: "3U VPX Power Supply Unit", link: "/standard#3U" },
    { imgSrc: rel2, title: "Custom Power Supply Unit", link: "/customPSU#cuss" },
    { imgSrc: rel3, title: "6U VPX Power Supply Unit", link: "/standard#3U" },
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
          high-quality, defense-grade electronic systems and solutions...
        </p>

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
                <p className="fs-10" style={{ textAlign: "justify" }}>
                  {section.content}
                </p>
              </Col>
              <Col md={6}>
                <img
                  src={section.imgSrc}
                  alt={section.heading}
                  className="img-fluid design-image"
                />
              </Col>
            </Row>
          </div>
        ))}

        {/* Single Line and Button after all sections */}
        <div className="lineBtn my-5">
          <div className="border-line"></div>
          <Button onClick={() => setShowRelatedProducts(!showRelatedProducts)}>
            {showRelatedProducts ? "Read Less" : "Read More"}
          </Button>
        </div>

        {/* Display Related Products if button is clicked */}
        {showRelatedProducts && (
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

export default DesignServices;
