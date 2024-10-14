import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./FirstBanner.css"; 

const SecondBanner = () => {
  return (
    <>
      <div className="secimg">
        <Container className="p-5">
          <Row className="text-center text-lg-start" > 
            <Col xs={12} md={10} lg={8} className="text">
              <h1 className="h1text fw-bold color-black">READY TO START YOUR PROJECT?</h1>
              <p className="fs-5 textpara">
                Whether you are looking for an off-the-shelf product or a custom
                solution, we can help you meet your requirements. Contact
                us to speak with one of our solutions experts.
              </p>
              <Button className="CardBtn">
                LET'S TALK
              </Button>
            </Col>
          </Row>
        </Container>  
      </div>
    </>
  );
};

export default SecondBanner;
