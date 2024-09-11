import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import card1 from '../../../Assets/images/ProductsImg/pr4.jpg';
import card2 from '../../../Assets/images/ProductsImg/pr5.jpg';
import card3 from '../../../Assets/images/ProductsImg/pr2.jpg';
import card4 from '../../../Assets/images/ProductsImg/pr1.jpg';
import card5 from '../../../Assets/images/ProductsImg/pr6.jpg';
import card6 from '../../../Assets/images/ProductsImg/pr3.jpg';
import card7 from '../../../Assets/images/ProductsImg/pr7.jpg';

import "./products.css";

const Products = () => {
  const cardData = [
    {
      image: card1,
      imageHeading: "Power Supply unit",
    },
    {
      image: card2,
      imageHeading: "BackPlane",
    },
    {
      image: card3,
      imageHeading: "Rugged Display Solutions",
    },
    {
      image: card4,
      imageHeading: "Radar Computer and ATR",
     
    },
    {
      image: card5,
      imageHeading: "Dual Monitor Console",
    },
    {
      image: card6,
      imageHeading: "Servers and Workstations",
    },
    {
      image: card7,
      imageHeading: "Rugged PC's",
    },
  ];

  return (
    <>
      <Container>
        <div className="proHead text-center">
          <h1 className="fw-bold">PRODUCTS</h1>
        </div>
      </Container>

      <Container >
        <Row className="card-main-container" >
          {cardData.map((card, index) => (
            <Col key={index} className="products mb-4">
              <Card className="hover-contaier-outer">
                <div className="card-img-container">
                  <Card.Img className="card-img" variant="top" src={card.image} />
                  <div className="card-img-overlay">
                    <Card.Title className="imgTitle">{card.imageHeading}</Card.Title>
                  </div>
                </div>
                <div class="hover-over-container"></div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
