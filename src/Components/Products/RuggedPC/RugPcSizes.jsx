
import React from "react";
import { Card, Container, ListGroup, Row, Col } from "react-bootstrap";
import "./Size.css";
import PcImg from "../../../Assets/images/AllproductsImages/RPC_Img/rpc_2.png";
import TapImg from "../../../Assets/images/AllproductsImages/RugTabletsImg/Tableteight.png";
import boxImg from "../../../Assets/images/AllproductsImages/BoxPcImg/box3.png";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Rugged Laptops",
    img: PcImg,
    description:
      'These Laptop offer IP-65 protection and Roda’s unique cooling system. Powered by an Intel Celeron 2.8GHz Quad Core, they run Windows 10 or 11, feature a 12.2" IPS display, dual 5G, hot-swappable batteries, and rich accessories.',
    sizes: [
      { href: "/laptop/#laptop1", label: "12.2 RQ79-J Inches" },
      { href: "/laptop", label: "13.3 Inches" },
      { href: "/laptop", label: "12.2 RQ79-M Inches" },
      { href: "/laptop", label: "14 Inches" },
      { href: "/laptop", label: "15.6 Inches" },
    ],
    link: "/laptop",
  },
  {
    id: 2,
    title: "Rugged Tablets",
    img: TapImg,
    description:
      "This rugged Tablet offers 3G/4G connectivity, GPS, Wi-Fi, and Bluetooth. It features a 10,000mAh battery for 10-hour use, a 13 MP camera, and is built to meet IP65 and MIL-STD-810G standards for durability.",
    sizes: [
      { href: "/tablet", label: "10.1 Inches" },
      { href: "/tablet", label: "RZ-Q86" },
      { href: "/tablet", label: "12.2 Inches" },
      { href: "/tablet", label: "RZ-I86HH" },
      { href: "/tablet", label: "RZ-Q865M" },
    ],
    link: "/tablet",
  },
  {
    id: 3,
    title: "Rugged Box Pc",
    img: boxImg,
    description:
      "Rug-Rel Rugged Box PC is ideal for extreme conditions. Compact and reliable, it suits production lines and warehouses. This fanless PC features a wide operating temperature range, multiple I/O options, and runs on a Celeron CPU for a smooth experience.",
    sizes: [],
    link: "/box",
  },
];

const RugPcSizes = ({ CardTitle, sizeBtn }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={10} md={6} lg={4} className="my-2">
            <Card style={{ height: "39rem" }} className="MainCards">
              <Card.Img variant="top" className="p-4" src={product.img} />
              <hr />
              <Card.Body className="m-0 p-0">
                <Card.Title>
                  {product.title}
                  {CardTitle}
                </Card.Title>
                <Card.Text className="fs-7 p-1 m-1">
                  {product.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <div className="d-flex justify-content-between align-items-center flex-wrap p-1">
                  {product.sizes.map((size) => (
                    <Card.Link
                      key={size.label}
                      href={size.href}
                      className="ListGroup "
                    >
                      {size.label}
                    </Card.Link>
                  ))}
                </div>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  className="sizeBtn d-flex justify-content-center align-items-center"
                  href={product.link}
                >
                  Go To Page {sizeBtn}
                  <div className="ps-3">
                    <FaArrowRight />
                  </div>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RugPcSizes;

