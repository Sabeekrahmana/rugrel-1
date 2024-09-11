import React from "react";
import { Button, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import "./Ordering.css";

const OrderingInfo = () => {
  return (
    <Container className="my-5 p-4 bg-light rounded OrderingInfo">
      <h1 className="text-center">Ordering Info</h1>

      {/* BackPlane Type and Number of Slots */}
      <Row className="my-5 align-items-center">
        <Col xs={12} md={6} className="mb-3">
          <Dropdown className="d-flex justify-content-between align-items-center">
            <p className="fs-4 fw-bold mb-0 sizeorder">Type of BackPlane</p>
            <Dropdown.Toggle className="dropcolor" id="dropdown-backplane">
              VPX BackPlane
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">VME Backplane</Dropdown.Item>
              <Dropdown.Item href="#/action-3">VME64X Backplane</Dropdown.Item>
              <Dropdown.Item href="#/action-4">VSX Backplane</Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Compact PCI Backplane
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Dropdown className="d-flex justify-content-between align-items-center">
            <p className="fs-4 fw-bold mb-0 sizeorder">No Of Slots</p>
            <Dropdown.Toggle className="dropcolor" id="dropdown-slots">
              1
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2</Dropdown.Item>
              <Dropdown.Item href="#/action-2">3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">4</Dropdown.Item>
              <Dropdown.Item href="#/action-4">5</Dropdown.Item>
              <Dropdown.Item href="#/action-5">7</Dropdown.Item>
              <Dropdown.Item href="#/action-6">8</Dropdown.Item>
              <Dropdown.Item href="#/action-7">9</Dropdown.Item>
              <Dropdown.Item href="#/action-8">10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Power Backplane and Power Supply Options */}
      <Row className="OrderBtn my-4">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <p className="fs-4 fw-bold mb-0 sizeorder">Power Backplane</p>
          <div>
            <Button href="#" className="InfoBut mx-1">
              Yes
            </Button>
            <Button href="#" className="InfoBut mx-1">
              No
            </Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <p className="fs-4 fw-bold mb-0  sizeorder">Power Supply</p>
          <div>
            <Button href="#" className="InfoBut mx-1">
              Yes
            </Button>
            <Button href="#" className="InfoBut mx-1">
              No
            </Button>
          </div>
        </Col>
      </Row>

      {/* Additional Info */}
      <Form className="mb-3">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-5">Additional Info</Form.Label>
          <Form.Control as="textarea" rows={3} className="no-resize" />
        </Form.Group>
      </Form>

      {/* Submit Button */}
      <div className="">
        <Button className="InfoBut">Send</Button>
      </div>
    </Container>
  );
};

export default OrderingInfo;
