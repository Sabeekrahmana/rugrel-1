import React, { useState } from "react";
import "./Contact.css";
import Accordion from "react-bootstrap/Accordion";
import { SiGooglemaps } from "react-icons/si";
import { Col, Container, Row } from "react-bootstrap";

const MapDetails = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  return (
    <>
      <Container className="conAccordion p-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Accordion
              activeKey={activeKey}
              onSelect={handleToggle}
              className=" mb-4 "
            >
              <Accordion.Item eventKey="1" >
                <Accordion.Header>
                  <SiGooglemaps className=" fw-bolder me-5 fs-3" />
                  <strong>BANGALORE</strong>
                </Accordion.Header>
                <Accordion.Body>
                  India :-  <br />
                  Rug-Rel Components & Systems Pvt Ltd No. 307, 7th Block,
                  Nagarbhavi 2nd Stage, Bangalore – 560072, Karnataka, <br />
                  India Contact: +91 7369070074, +91 9487257906 email:
                  faiz.rahman@rugrel.com
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* ------------first one over---------- */}

          <Col lg={4} md={6} sm={12}>
            <Accordion
              activeKey={activeKey}
              onSelect={handleToggle}
              className=" mb-4"
            >
              <Accordion.Item eventKey="2" >
                <Accordion.Header>
                  <SiGooglemaps className=" fw-bolder me-5 fs-3" />
                  <strong>UK</strong>
                </Accordion.Header>
                <Accordion.Body >
                  UK :-  <br /> 
                   Rug-Rel Components & Systems Ltd 200 Brook Drive, Green
                  Park Reading, RG2 6UB, United Kingdom Contact: +44 7914 935648
                  email: sales.uk@rugrel.com
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* -------------second one over-------------- */}

          <Col lg={4} md={6} sm={12}>
            <Accordion
              activeKey={activeKey}
              onSelect={handleToggle}
              className=" mb-4"
            >
              <Accordion.Item eventKey="3" >
                <Accordion.Header>
                  <SiGooglemaps className=" fw-bolder me-5 fs-3" />{" "}
                  <strong>UAE</strong>
                </Accordion.Header>
                <Accordion.Body>
                  UAE :-  <br />
                  Rug-Rel Components & Systems LLC 957, 9th Floor, Burjuman
                  Business Tower, Sheikh Khalifa Bin Zayed Street, Al Mankhool,
                  Dubai, <br />
                  U.A.E Contact: +971 523465187 email: sales.uae@rugrel.com
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MapDetails;
