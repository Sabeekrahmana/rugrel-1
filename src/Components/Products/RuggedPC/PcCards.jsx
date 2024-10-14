import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './Size.css'

const PcCards = ({ sizeTitle, size1, size12, size3, size4, size5 }) => {
  return (
    <div>
      <Container>
        {/* <Card style={{ width: "18rem", height: "18rem" }}>
          <Card.Body>
            <Card.Title>{sizeTitle} cards</Card.Title>

            <Card.Text>Differnts Sizes</Card.Text>

            <div className="d_Sizer d-flex justify-content-start align-items-center flex-wrap">
              <div className="squarSize d-flex justify-content-center align-items-center m-1">
                <Card.Link className="" href="#">
                  Link
                </Card.Link>
              </div>
              <div className="squarSize d-flex justify-content-center align-items-center m-1">
                <Card.Link className="" href="#">
                  Link
                </Card.Link>
              </div>
              <div className="squarSize d-flex justify-content-center align-items-center m-1">
                <Card.Link className="" href="#">
                  Link
                </Card.Link>
              </div>
              <div className="squarSize d-flex justify-content-center align-items-center m-1">
                <Card.Link className="" href="#">
                  Link
                </Card.Link>
              </div>
              <div className="squarSize d-flex justify-content-center align-items-center m-1">
                <Card.Link className="" href="#">
                  Link
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card> */}

        <Card border="secondary" style={{ width: "20rem" }}>
          <Card.Header className="fs-4 fw-bold">Laptop Sizes</Card.Header>
          <Card.Body>
            <Card.Title>
              The preferred size is measured in inches for your reference
            </Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <div className="d-flex justify-content-between align-items-center flex-wrap p-1">
              <Card.Link href="/laptop/#laptop1" className="ListGroup ">
                12.2 RQ79-J Inches
              </Card.Link>

              <Card.Link href="#" className="ListGroup ">
                13.3 Inches
              </Card.Link>

              <Card.Link href="#" className="ListGroup ">
                12.2 RQ79-M Inches
              </Card.Link>

              <Card.Link href="#" className="ListGroup ">
                14 Inches
              </Card.Link>

              <Card.Link href="#" className="ListGroup ">
                15.6 Inches
              </Card.Link>
            </div>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default PcCards;