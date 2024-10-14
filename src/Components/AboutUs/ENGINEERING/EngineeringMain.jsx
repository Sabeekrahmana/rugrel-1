import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../AboutUs.css";
import FirstBanner from "../BannerPage/FirstBanner";
import SecondBanner from "../BannerPage/SecondBanner";

const EngineeringMain = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <FirstBanner />
      <Container className="diContainer mt-5 mb-5">
        <div className="para-one">
          <h2 className="fw-bold">Unique Capabilities</h2>
          <br />
          <p>
          Rug-Rel Components & Systems Pvt. Ltd. stands out in the defence and aerospace sectors with unique capabilities. We create custom solutions tailored to clients' needs, leveraging advanced technologies and innovative approaches. Our achievements include high-speed, multi-layer PCBs, ruggedized systems, and advanced power supply units compliant with MIL-STD standards. Our state-of-the-art manufacturing capabilities ensure precision and quality in every product. Certified to ISO 9001:2015 and MIL-STD compliant, our stringent quality control processes guarantee high performance and durability.
          </p>
        </div>
        <div className="para-two mt-5">
          <h2 className="EngHead fw-bold">Engineering Excellence</h2>
          <br />
          <p>
          At Rug-Rel, engineering excellence is at the heart of everything we do. Our skilled engineers specialize in electronic and mechanical design, FPGA based design, and embedded systems, allowing us to tackle complex projects and deliver innovative solutions. We provide end-to-end solutions, from initial design and prototyping to full-scale production and system integration. By staying at the forefront of technological advancements, we ensure high-quality, reliable solutions that meet the rigorous demands of the defence and aerospace industries, driving our clients' success in every mission.
          </p>
        </div>
      </Container>
      <SecondBanner />
    </>
  );
};

export default EngineeringMain;
