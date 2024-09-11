import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import IS1 from '../../../Assets/images/defence.jpg';
import IS2 from '../../../Assets/images/Aerospace.jpg';
import IS3 from '../../../Assets/images/rail.jpg';
import IS4 from '../../../Assets/images/ind.jpeg';

// Sample data
const data = [
  { imgSrc: IS1, title: 'Defense', text: 'Delivering robust and dependable solutions for defense applications to ensure mission success.' },
  { imgSrc: IS2, title: 'Aerospace', text: 'Providing advanced solutions for the aerospace industry to enhance performance and reliability.' },
  { imgSrc: IS3, title: 'Railways', text: 'Innovative solutions for the Railways sector to support high-performance networks.' },
  { imgSrc: IS4, title: 'Industrial', text: 'Reliable and efficient solutions for various industrial applications to enhance productivity.' }
];

const IndustrialSolutions = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold">INDUSTRIAL SOLUTIONS</h2>
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card className='indCard h-100'>
              <Card.Img variant="top" src={item.imgSrc}  className="card-img-custom" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustrialSolutions;
