import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import "./Size.css";
import PcImg from "../../../Assets/images/AllproductsImages/RPC_Img/rpc_2.png";
import TapImg from "../../../Assets/images/AllproductsImages/RugTabletsImg/Tableteight.png";
import boxImg from "../../../Assets/images/AllproductsImages/BoxPcImg/box3.png";
import { FaArrowRight } from "react-icons/fa";

const RugPcSizes = ({ CardTitle, sizeBtn }) => {
  return (
    <>
      <Container className="my-5 d-flex justify-content-around align-items-center">
        <Card style={{ width: "18rem", height: "39rem" }} className="MainCards">
          {/* i should put box show */}
          <Card.Img variant="top" className="p-4" src={PcImg} />
          <hr />
          <Card.Body className="m-0 p-0">
            <Card.Title>Rugged Laptops{CardTitle}</Card.Title>
            <Card.Text className="fs-7 p-1 m-1">
              These Laptop offer IP-65 protection and Roda’s unique cooling
              system. Powered by an Intel Celeron 2.8GHz Quad Core, they run
              Windows 10 or 11, feature a 12.2" IPS display, dual 5G,
              hot-swappable batteries, and rich accessories.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush  ">
            {/* <ListGroup.Item> */}
            <div className="d-flex justify-content-between align-items-center flex-wrap p-1">
              <Card.Link href="/laptop/#laptop1" className="ListGroup ">
                12.2 RQ79-J Inches
              </Card.Link>

              <Card.Link href="/laptop" className="ListGroup ">
                13.3 Inches
              </Card.Link>

              <Card.Link href="/laptop" className="ListGroup ">
                12.2 RQ79-M Inches
              </Card.Link>

              <Card.Link href="/laptop" className="ListGroup ">
                14 Inches
              </Card.Link>

              <Card.Link href="/laptop" className="ListGroup ">
                15.6 Inches
              </Card.Link>
            </div>
            {/* i should pass props */}
            {/* </ListGroup.Item> */}
          </ListGroup>
          <Card.Body>
            <Card.Link
              className="sizeBtn d-flex justify-content-center align-items-center "
              href="/laptop"
            >
              Go To Page{sizeBtn}
              <div className="ps-3">
                <FaArrowRight />
              </div>
            </Card.Link>
          </Card.Body>
        </Card>
        {/* seconds */}
        <Card style={{ width: "18rem", height: "39rem" }} className="MainCards">
          <Card.Img variant="top" className="p-4" src={TapImg} />
          <hr />
          <Card.Body className="m-0 p-1">
            <Card.Title>Rugged Tablets{CardTitle}</Card.Title>
            <Card.Text className="fs-7">
              This rugged Tablets offers 3G/4G connectivity, GPS, Wi-Fi, and
              Bluetooth. It features a 10,000mAh battery for 10-hour use, a 13
              MP camera, and is built to meet IP65 and MIL-STD-810G standards
              for durability.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush  ">
            {/* <ListGroup.Item> */}
            <div className="d-flex justify-content-between align-items-center flex-wrap p-1">
              <Card.Link href="/tablet" className="ListGroup ">
                10.1 Inches
              </Card.Link>
              <Card.Link href="/tablet" className="ListGroup ">
                RZ-Q86
              </Card.Link>
              <Card.Link href="/tablet" className="ListGroup ">
                12.2 Inches
              </Card.Link>

              <Card.Link href="/tablet" className="ListGroup ">
                RZ-I86HH
              </Card.Link>

              <Card.Link href="/tablet" className="ListGroup ">
                RZ-Q865M
              </Card.Link>
            </div>

            {/* i should pass props */}
            {/* </ListGroup.Item> */}
          </ListGroup>
          <Card.Body>
            <Card.Link
              className="sizeBtn d-flex justify-content-center align-items-center "
              href="/tablet"
            >
              Go To Page{sizeBtn}
              <div className="ps-3">
                <FaArrowRight />
              </div>
            </Card.Link>
          </Card.Body>
        </Card>
        {/* next */}
        <Card style={{ width: "18rem", height: "39rem" }} className="MainCards">
          {/* i should put box show */}
          <Card.Img variant="top" className="p-4" src={boxImg} />
          <hr />
          <Card.Body className="m-0 p-1">
            <Card.Title>Rugged Box Pc{CardTitle}</Card.Title>
            <Card.Text className="fs-7">
              Rug-Rel Rugged Box PC is ideal for extreme conditions. Compact and
              reliable, it suits production lines and warehouses. This fanless
              PC features a wide operating temperature range, multiple I/O
              options, and runs on a Celeron CPU for a smooth experience
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush  ">
            {/* <ListGroup.Item> */}
            {/* <div className="d-flex justify-content-between align-items-center flex-wrap p-1">
              <div className="ListGroup p-2"> 12.2 RQ79-J Inches </div>
              <div className="ListGroup p-2"> 13.3 Inches</div>
              <div className="ListGroup p-2">12.2 RQ79-M Inches</div>
              <div className="ListGroup p-2">14 Inches</div>
              <div className="ListGroup p-2">15.6 Inches</div>
            </div> */}

            {/* i should pass props */}
            {/* </ListGroup.Item> */}
          </ListGroup>
          <Card.Body>
            <Card.Link
              className="sizeBtn d-flex justify-content-center align-items-center "
              href="/box"
            >
              Go To Page{sizeBtn}
              <div className="ps-3">
                <FaArrowRight />
              </div>
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default RugPcSizes;
