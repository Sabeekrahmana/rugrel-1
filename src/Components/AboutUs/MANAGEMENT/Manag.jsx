import React from 'react'
import { Container, Card } from "react-bootstrap";
import '../AboutUs.css'

import managimg from '../../../Assets/images/Management/animan.jpg'
import managimg1 from '../../../Assets/images/Management/animan2.jpg'
import SecondBanner from '../BannerPage/SecondBanner';

const cardData = [
  {
    src: managimg,
    title: "Card Title 1",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg1,
    title: "Card Title 2",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg,
    title: "Card Title 3",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg1,
    title: "Card Title 4",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg,
    title: "Card Title 5",
    text: "Some quick example text to build on the card title.",
  },
  {
    src: managimg1,
    title: "Card Title 5",
    text: "Some quick example text to build on the card title .",
  },
];

const Manag = () => {
  return (
    <>
      <div className="">
        <div className="mangimg">
          <h1 className="img-text h11">MANAGEMENT TEAM</h1>
        </div>
        <Container>
          <h2 className='mh1  my-5 fs-2 fw-bold'>EXPERTS IN THE FIELD OF RUGGED COMPUTING SOLUTIONS</h2>
          <Container>
            <div className="Containers ">
              {cardData.map((card, index) => (
                <Card className="managCards" key={index}>
                  <Card.Body className='p-2 mb-5'>
                    <img src={card.src} alt="" className="TeamImg mb-3" />
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </Container>
      </div>
      <SecondBanner />
    </>
  );
}

export default Manag;