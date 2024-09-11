import React from "react";
import "./ProInfo&Data.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductsInfo = ({ head, img, texts, mainTitle,id }) => {
  return (
    <>
      <Container className="my-5" id={id}>
          <h3 className="fs-2"> {mainTitle}</h3>
        <br />

        <div className="productInfo">
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div className="infoimg  d-flex  justify-content-center  align-items-center   h-100 ">
                <img src={img} alt="Product" className="imageinfo" />
              </div>
            </Col>
            <Col sm={12} md={8} lg={8}>
              <div  className="infoData  w-100 p-4">
                <h3 className="fs-4 fw-bold">{head}</h3>
                <hr />
                {texts.map((text, index) => (
                  <p key={index} id={text.id}>{text}</p>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProductsInfo;

