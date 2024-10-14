import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const EnquiryForm = () => {
  return (
    <Container fluid className="mt-5 EnqSection">
      <Row className='mx-5 py-5'>
        <Col md={6}>
          <h2 className='fw-bold'>Enquiry</h2>
          <p className='pe-5 mt-4'>If you have any questions or need further information, please fill out the form below, and we will get back to you as soon as possible.</p>
        </Col>
        <Col md={6}  className='p-4 enqForm'>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" className='mb-3' />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" className='mb-3' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCompany">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" className='mb-3'  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className='mb-3'  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" className='mb-3' rows={2}  />
            </Form.Group>
            <Button variant="dark" type="submit" className=" purple-button fw-bold mt-3">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryForm;
