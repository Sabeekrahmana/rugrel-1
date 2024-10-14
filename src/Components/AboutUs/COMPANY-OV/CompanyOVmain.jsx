import SecondBanner from '../BannerPage/SecondBanner';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { MdPlayArrow } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import FirstBanner from '../BannerPage/FirstBanner';

const CompanyOVmain = () => {
  const [activeItem, setActiveItem] = useState('COMPANY OVERVIEW');
  const [activeSubItem, setActiveSubItem] = useState('');

  useEffect(() => window.scroll(0, 0), []);


  const faqItems = [
    {
      title: 'COMPANY OVERVIEW',
      content: '',
      subItems: [
        {
          title: 'Introduction',
          content: 'Rug-Rel Components & Systems Pvt. Ltd. was established with a pioneering spirit in 2017, dedicated to providing cutting-edge technology solutions for the defence and aerospace sectors.'
        },
        {
          title: 'Evolution',
          content: 'Since our inception, Rug-Rel has evolved into a trusted name synonymous with innovation, reliability, and precision engineering in defence and aerospace technology. We have continuously expanded our capabilities and product offerings to meet the dynamic needs of our global clientele.'
        },
        {
          title: 'Experience and Specialization',
          content: 'With over a decade of experience, we specialize in high-quality, reliable products that meet the stringent demands of these industries. Our core competencies include electronic and mechanical design and development, FPGA design, and embedded systems, allowing us to handle complex projects and deliver innovative, custom solutions.'
        },
        {
          title: 'Manufacturing Capabilities',
          content: 'Our state-of-the-art manufacturing capabilities, such as CNC machining, laser cutting, and PCB assembly, ensure precision and quality in every product. Our rigorous quality control processes, certified to ISO 9001:2015 and compliant with MIL-STD, guarantee the highest levels of performance and durability.'
        },
        {
          title: 'Mission Statement',
          content: 'Rug-Rel Components & Systems Pvt. Ltd. is committed to driving innovation and reliability in defence and aerospace technology, building enduring partnerships based on trust, integrity, and excellence.'
        },
      ]
    },
    {
      title: 'OPERATIONAL PRESENCE',
      content: 'In addition to our headquarters in Bangalore, we have operational offices strategically located in the UK and UAE. These offices enhance our ability to serve international markets efficiently and effectively.'
    },
    {
      title: 'TEAM EXPERTISE',
      content: 'Our success is driven by a team of seasoned professionals with extensive expertise in defence and aerospace technology. From engineering to project management, our team is committed to delivering tailored solutions that exceed client expectations.'
    },
    {
      title: 'KEY HIGHLIGHTS',
      content: 'Comprehensive Product Range: Explore our diverse portfolio including power supply units, backplanes, rugged display solutions, radar computers & ATR, dual monitor consoles, servers & workstations, and rugged PCs.'
    },
    {
      title: 'INNOVATION AND CUSTOMIZATION',
      content: 'Our expert team specializes in delivering customized solutions, leveraging advanced technologies to meet specific client requirements and exceed expectations in challenging environments.'
    },
    {
      title: 'CUSTOMER FOCUS',
      content: 'At Rug-Rel, customer satisfaction is paramount. We provide exceptional service, technical expertise, and seamless integration of our products into defence and aerospace applications.'
    },
  ];

  return (
    <>
    <div className="overViewImg">
    <h1 className='fw-bolder ms-3 ovHead'>COMPANY OVERVIEW</h1>
    </div>
      <Container className='py-5'>
        <Row>
          <Col md={5} className="faq-sidebar">
            <ListGroup className='py-5 listGroup'>
              {faqItems.map((item, index) => (
                <ListGroupItem className='py-3 listGroupItem'
                  key={index}
                  active={item.title === activeItem}
                  onClick={() => {
                    setActiveItem(item.title);
                    setActiveSubItem('');
                  }}
                  action
                >
                  {item.title} <MdPlayArrow className='fs-3 iconArrow' />
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={7} className="faq-content">
            {faqItems.map((item, index) =>
              item.title === activeItem ? (
                <div key={index}>
                  <h1 className='fw-bold'>{item.title}</h1>
                  {item.subItems ? (
                    <ListGroup className='mb-3'>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListGroupItem className='listGroupItem'
                          key={subIndex}
                          active={subItem.title === activeSubItem}
                          onClick={() => setActiveSubItem(subItem.title)}
                          action
                        >
                          {subItem.title} <BiSolidDownArrow  className='fs-3 iconArrow' />
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  ) : (
                    <p>{item.content}</p>
                  )}
                  {item.subItems && activeSubItem && (
                    <div>
                      {item.subItems.map((subItem, subIndex) =>
                        subItem.title === activeSubItem ? (
                          <p key={subIndex}>{subItem.content}</p>
                        ) : null
                      )}
                    </div>
                  )}
                </div>
              ) : null
            )}
          </Col>
        </Row>
      </Container>
      <SecondBanner />
    </>
  );
}

export default CompanyOVmain;
