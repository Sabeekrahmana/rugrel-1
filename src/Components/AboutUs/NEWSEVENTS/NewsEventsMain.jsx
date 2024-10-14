import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Pagination } from "react-bootstrap";
import "../AboutUs.css";
import ab1 from "../../../Assets/images/AboutImg/ab1.jpg";
import ab2 from "../../../Assets/images/AboutImg/ab2.png";
import ab3 from "../../../Assets/images/AboutImg/ab3.png";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const NewsEventsMain = () => {

  useEffect(() => window.scroll(0, 0), []);

  
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Event 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: ab1,
    },
    {
      id: 2,
      title: "Event 2",
      text: "Another example text for the second event card.",
      imgSrc: ab2,
    },
    {
      id: 3,
      title: "Event 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: ab1,
    },
  ];

  const cardData2 = [
    {
      id: 1,
      date: "May 02, 2024",
      title:
        "RUG-REL ITS MANY  SHOWCASES INNOVATIVE ORION 15A ALL-IN-ONE DISPLAY AT SOF WEEK 2024",
      imgSrc: ab3,
    },
    {
      id: 2,
      date: "May 03, 2024",
      title: "ANOTHER OF THE INNOVATION SHOWCASE AT TECH EXPO 2024",
      imgSrc: ab2,
    },
    {
      id: 3,
      date: "May 04, 2024",
      title: "BREAKTHROUGH TECHNOLOGY UNVEILED AT FUTURE TECH SUMMIT 2024",
      imgSrc: ab3,
    },
    {
      id: 4,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 5,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 6,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 7,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 8,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 9,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 10,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 11,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 12,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 13,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 14,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 15,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 16,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 17,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 18,
      date: "May 05, 2024",
      title: "NEW ADVANCEMENTS IN AI ANNOUNCED AT AI CONFERENCE 2024",
      imgSrc: ab3,
    },
    {
      id: 19,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
    {
      id: 20,
      date: "May 06, 2024",
      title: "ROBOTICS INNOVATION AT ROBOTEXPO 2024",
      imgSrc: ab1,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate indices for slicing the cardData2 array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData2.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cardData2.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
    <div className="eventsImg">
      <div className="eventsHead">NEWS AND EVENTS</div>
    </div>
      <Container>
        <Row>
          <h1 className="mt-5 upComing">Upcoming Events</h1>
        </Row>
        <Row>
          {cardData.map((card) => (
            <Col key={card.id} md={4} className="mb-5">
              <Card style={{ width: "20rem", border: "none" }}>
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body className="cardBody">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button className="CardBtn">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <h1 className="mt-5 upComing">Latest News</h1>
        </Row>
        <Row>
          {currentItems.map((card) => (
            <Col key={card.id} md={4} className="mb-5 d-flex">
              <Card
                style={{ width: "22rem", border: "none", textAlign: "justify" }}
              >
                <Card.Img
                  variant="top"
                  style={{ borderRadius: "0px" }}
                  src={card.imgSrc}
                />
                <Card.Body className="cardBody">
                  <Card.Text className="CardDate">
                    <small>{card.date}</small>
                  </Card.Text>
                  <Card.Title className="cardTitle">{card.title}</Card.Title>
                  <Button className="CardBtn">READ MORE</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* -----------------PAGINATION----------------- */}

        <Pagination className="justify-content-center">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            <FaAngleDoubleLeft />
          </Pagination.First>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft /> Previous
          </Pagination.Prev>
          {[...Array(totalPages).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {" "}
            Next <FaAngleRight />
          </Pagination.Next>
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {" "}
            <FaAngleDoubleRight />
          </Pagination.Last>
        </Pagination>
      </Container>
    </>
  );
};

export default NewsEventsMain;
