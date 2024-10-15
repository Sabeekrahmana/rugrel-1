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
                <b>India :- </b>  <br />
                  Rug-Rel Components & Systems Pvt Ltd No. 307, 7th Block,
                  Nagarbhavi 2nd Stage, Bangalore – 560072, Karnataka, <br />
                  <b>India Contact : </b> +91 7369070074, +91 9487257906  <br /> 
                  <b>Email : </b>
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
                <b>UK :- </b>  <br /> 
                   Rug-Rel Components & Systems Ltd 200 Brook Drive, Green
                  Park Reading, RG2 6UB, United Kingdom
                  <br /> <b> Contact : </b> +44 7914 935648 <br />
                  <b> Email : </b> sales.uk@rugrel.com
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
                <b>UAE :- </b>  <br />
                  Rug-Rel Components & Systems LLC 957, 9th Floor, Burjuman
                  Business Tower, Sheikh Khalifa Bin Zayed Street, Al Mankhool,
                  Dubai, <br />
                  <b>U.A.E Contact : </b> +971 523465187  <br /> 
                  <b>Email : </b> sales.uae@rugrel.com
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
