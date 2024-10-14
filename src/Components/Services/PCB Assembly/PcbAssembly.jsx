import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pngImg from "../../../Assets/images/ServicesImg/png1.png"
import ban3 from "../../../Assets/images/ServicesImg/ban3.jpg"
import ServiceBanner from "../ServiceBanners/ServiceBanner";
import SecondBanner from "../../AboutUs/BannerPage/SecondBanner";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";

// Array of data for dynamic rendering
const pcbData = [
  {
    id: 1,
    imgSrc:pngImg,
    title: "PCB Type 1",
    description: "The ZXC series provides all the processing and storage capability of a ZX rugged server in a lightweight DO-160 compliant package, making them ideal for airborne applications technology provided in the COTS marketplace..",
  },
  {
    id: 2,
    imgSrc: pngImg,
    title: "PCB Type 2",
    description: "The ZXC series provides all the processing and storage capability of a ZX rugged server in a lightweight DO-160 compliant package, making them ideal for airborne applications technology provided in the COTS marketplace..",
  },
  {
    id: 3,
    imgSrc: pngImg,
    title: "PCB Type 3",
    description: "The ZXC series provides all the processing and storage capability of a ZX rugged server in a lightweight DO-160 compliant package, making them ideal for airborne applications technology provided in the COTS marketplace..",
  },
];

const PcbAssembly = () => {

  useEffect(() => window.scroll(0, 0),[])

  return (
    <>
      <HeadNavBar />
      <ServiceBanner 
         imageUrl= {ban3}  
        heading="PCB ASSEMBLY"
      />
      <Container className="my-5">
        <h1 className="fw-bold text-center mb-4">PCB Assembly</h1>
        <p className="text-justify mb-5">
          At our facility, we provide top-notch PCB assembly services to meet your specific needs. Whether you require a simple board or a complex, multi-layer PCB, we have the expertise to deliver high-quality results.
          ZMicro’s line of lightweight, rack-mountable rugged servers and computers are integrated with the latest technology provided in the COTS marketplace. Flexible 1U, 2U and 3U form factors and future-proof system architectures offer you the latest multi-core processing options. ZMicro offers four families of customizable rugged servers and computer including; the ZE embedded computer series, ZM ultra-lightweight rugged computer series, ZXC lightweight server series, and the ZX rugged server series.
        </p>
        <Row>
          {pcbData.map((item) => (
            <Col key={item.id} md={4} className="text-center mb-4">
              <img src={item.imgSrc} alt={item.title} className="img-fluid" />
              <h3 className="mt-3 text-center">{item.title}</h3>
              <p className="text-justify mb-4">{item.description}</p>
              <Button className="CardBtn">Learn More</Button>
            </Col>
          ))}
        </Row>
      </Container>
      <SecondBanner />
      <Footer />
    </>
  );
};

export default PcbAssembly;
