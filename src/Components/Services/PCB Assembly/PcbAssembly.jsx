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
        <h1 className="fw-bold text-center mb-4">3. PCB Assembly Services</h1>
        <p className="text-justify mb-5">
        At Rug-Rel, we provide end-to-end PCB assembly services, including surface-mount technology (SMT) and through-hole technology (THT). Our advanced assembly processes ensure that PCBs are built to precise specifications, with rigorous quality control at each step to ensure reliability. We specialize in defense-grade PCB assembly, focusing on high-frequency, RF, and multi-layer boards that meet strict military standards. Our ESD-protected facilities guarantee the highest levels of safety and performance in every assembly.
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
