import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../AboutUs.css";
import SecondBanner from "../BannerPage/SecondBanner";

const Manufacturing = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <div className="">
        <div className="manbanner">
          <h1 className="fw-bold  h11">MANUFACTURING PROCESS</h1>
        </div>
        <Container className=" mt-5">
          <h2 className="mb-5 w-80 fw-bold">
            Precision Manufacturing and Quality Control for Defence at Rug-Rel
            Components & Systems Pvt. Ltd.
          </h2>

          <div className="manufacturePara">
            <p>
              Explore Rug-Rel Components & Systems Pvt. Ltd.'s advanced
              manufacturing processes and rigorous quality controls tailored
              specifically for the defence and aerospace sectors. Our process
              begins with cutting-edge CAD/CAM design, ensuring precise
              alignment with client specifications or through innovative R&D
              initiatives.
            </p>
<br />
            <p>
              Material sourcing adheres strictly to industry standards such as
              MIL-STD and AS9100, guaranteeing superior quality and reliability.
              Our state-of-the-art facilities utilize advanced machining
              techniques including CNC milling and turning, complemented by
              meticulous assembly procedures supervised by highly skilled
              technicians.
            </p>
            <br />
            <p>
              Quality assurance is paramount throughout our operations. From
              thorough raw material inspections to comprehensive final product
              testing for functionality, environmental resilience, and
              reliability, we ensure every component meets stringent criteria.
              Our commitment to excellence is supported by a robust Quality
              Management System (QMS) compliant with ISO 9001 or AS9100,
              ensuring consistent performance and client satisfaction.
            </p>
<br />
            <p>
              Discover how Rug-Rel Components & Systems Pvt. Ltd. sets the
              standard for precision manufacturing and reliability in the
              defence and aerospace industries. Contact us today to learn more
              about our capabilities and tailored solutions.
            </p>
            <br />
          </div>
        </Container>
      </div>
      <SecondBanner />
    </>
  );
};

export default Manufacturing;
