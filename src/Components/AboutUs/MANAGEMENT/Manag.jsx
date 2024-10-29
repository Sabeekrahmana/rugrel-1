import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../AboutUs.css";

import managimg from "../../../Assets/images/Management/animan.jpg";
import managimg1 from "../../../Assets/images/Management/Qais.png";
import managimg2 from "../../../Assets/images/Management/RAZA.png";
import managimg3 from "../../../Assets/images/Management/anas.jpg";
import managimg4 from "../../../Assets/images/Management/faiz.jpg";
import managimg5 from "../../../Assets/images/Management/isa.png";
import SecondBanner from "../BannerPage/SecondBanner";

const cardData = [
  {
    src: managimg1,
    title: "Card Title 2",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg2,
    title: "Card Title 3",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg3,
    title: "Card Title 4",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg4,
    title: "Card Title 5",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg5,
    title: "Card Title 6",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg,
    title: "Card Title 1",
    text: "Some quick example text to build on the card title.",
  },
];

const Manag = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <div className=" ">
        <div className="mangimg">
          <h1 className="img-text h11">MANAGEMENT TEAM</h1>
        </div>
        <Container>
          <h2 className="mh1 my-5 fs-2 fw-bold OurCommitment">
            EXPERTS IN THE FIELD OF RUGGED COMPUTING SOLUTIONS
          </h2>
          <Container>
            <Row className="justify-content-center">
              {cardData.map((card, index) => (
                <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                  <Card className="managCards h-100">
                    <Card.Body className="p-2 ">
                      <div className=" manageImg d-flex justify-content-center align-items-center p-">
                        <img src={card.src} alt="" className="TeamImg " />
                      </div>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
      <SecondBanner />
    </>
  );
};

export default Manag;
