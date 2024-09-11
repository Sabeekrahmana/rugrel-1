import React from "react";
import "./ProInfo&Data.css";
import { Container, Row, Col, NavLink } from "react-bootstrap";

const ProductsData = ({ data }) => {
  return (
    <div className="w-100">
      <Container className="powersupplyData mt-4 text-center">
        <Row className="d-flex justify-content-between align-items-center">
          {data.map((item, index) => (
            <Col key={index} sm={item.sm} md={item.md} lg={item.lg}>
              <NavLink href={item.link} className="DataNav mb-3">
                {item.label}
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsData;

