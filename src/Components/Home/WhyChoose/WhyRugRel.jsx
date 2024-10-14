import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './whyRugrel.css';

const data = [
  { title: "QUALITY STANDARDS", text: " At Rug-Rel Components & Systems Pvt. Ltd., quality is paramount. We uphold rigorous standards to ensure our defence and aerospace solutions are reliable, durable, and perform with excellence." },
  { title: "DEFENCE EXPERTISE", text: "Rug-Rel Components & Systems Pvt. Ltd. boasts over a decade of expertise in defence electronics. Our profound industry knowledge allows us to deliver specialized insights and solutions that enhance operational capabilities and ensure mission success." },
  { title: "CUSTOM SOLUTIONS", text: "Specializing in tailored solutions for defence and aerospace sectors, Rug-Rel Components & Systems Pvt. Ltd. collaborates closely to deliver innovative, high-performance solutions that meet specific operational needs." },
  { title: "OUR COMMITMENT", text: "Our commitment at Rug-Rel Components & Systems Pvt. Ltd. is unwavering. We prioritize customer satisfaction through responsive service, personalized solutions, and steadfast support, forging lasting partnerships built on trust and mutual success." },
];
const WhyRugRel = () => {
  return (
    <>
        <h2 className="text-center mb-5 fw-bold">WHY RUG-REL ?</h2>
      <Container fluid className="my-3 whySection">
        <Row>
          {data.map((item, index) => (
            <Col key={index} sm={12} md={6} className="mb-4 mt-4">
              <Card className="whyCard  ">
                <Card.Body className="whyBody ">
                  <Card.Title className="whyTitle ">{item.title}</Card.Title>
                  <div className="line"></div>
                  <Card.Text className="">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WhyRugRel;
