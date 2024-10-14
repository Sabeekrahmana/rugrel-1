import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portraitImage from '../../../Assets/images/NewsEvents/news.jfif'; 

const UpcomingEvents = () => {
  return (
    <Container className="mt-5 text-center">
      <h1 className="fw-bold">Upcoming Events</h1>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <img
            src={portraitImage}
            alt="Upcoming Event"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default UpcomingEvents;
