import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { MdPlayArrow } from "react-icons/md";

const WhyRuqFaq = () => {
  const [activeItem, setActiveItem] = useState("CUSTOMER DRIVEN CULTURE");

  useEffect(() => window.scroll(0, 0), []);

  const faqItems = [
    {
      title: "CUSTOMER DRIVEN CULTURE",
      content:
        "At Rug-Rel Components & Systems Pvt. Ltd., our customer-driven culture is the cornerstone of our success. We prioritize understanding the unique needs of each client, delivering tailored solutions that not only meet but exceed expectations. By fostering open communication and collaboration, we build long-term partnerships based on trust and mutual growth. Our commitment to exceptional service, responsiveness, and continuous improvement ensures that we remain attuned to our customers evolving requirements, providing innovative solutions that drive their success.",
    },
    {
      title: "DEFENCE-FIRST PRODUCT FOCUS",
      content:
        "For over a decade, Rug-Rel Components & Systems Pvt. Ltd. has specialized in developing high-quality products for the defence markets. While many of our solutions are adopted across various industries, our primary focus remains on defence. Our deep understanding of defence programs and product requirements enables us to create reliable, rugged solutions designed for long-term program life-cycle protection and operational excellence.",
    },
    {
      title: "EXPERTLY CUSTOMIZED SOLUTIONS",
      content:
        "Rug-Rel Components & Systems Pvt. Ltd. excels in providing expertly customized solutions, leveraging our extensive in-house engineering expertise and advanced on-site manufacturing capabilities. Whether modifying an existing product to meet your specific needs or developing a completely new solution in collaboration with you, our team is committed to delivering precision and reliability. Our mature production and quality processes allow us to swiftly adapt our manufacturing line to new and custom products, ensuring rapid and consistent delivery of high-quality solutions tailored to the unique requirements of your program.",
    },
    {
      title: "QUALITY STANDARD SOLUTIONS",
      content:
        "At Rug-Rel Components & Systems Pvt. Ltd., we are committed to upholding the highest quality standards in every aspect of our operations. Our stringent quality control measures, implemented throughout the design, manufacturing, and implementation processes, ensure that each product meets rigorous performance and reliability criteria. Certified to ISO 9001:2015 and compliant with MIL-STD and other industry standards, our quality assurance practices guarantee that our solutions are built to excel in the most demanding environments. We continuously strive for excellence, ensuring that our clients receive products of unparalleled quality and durability.",
    },
  ];

  return (
    <>
      <div className="whyRugImg">
        <h1 className="img-text">WHY RUG-REL..?</h1>
      </div>
      <Container className="py-5">
        <Row>
          <h1 className="fw-bolder ms-3">WHY RUG-REL ?</h1>
          <Col md={5} className="faq-sidebar ">
            <ListGroup className="py-5 listGroup">
              {faqItems.map((item, index) => (
                <ListGroupItem
                  className="py-3 listGroupItem"
                  key={index}
                  active={item.title === activeItem}
                  onClick={() => setActiveItem(item.title)}
                  action
                >
                  {item.title} <MdPlayArrow className="fs-3 iconArrow" />
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={7} className="faq-content">
            {faqItems.map((item, index) =>
              item.title === activeItem ? (
                <div key={index}>
                  <h1 className="fw-bold">{item.title}</h1>
                  <p className="">{item.content}</p>
                </div>
              ) : null
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyRuqFaq;
