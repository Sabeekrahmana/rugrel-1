import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import SecondBanner from '../BannerPage/SecondBanner';

const QualityStdMain = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <div className="qualityImg">
        <h1 className='qualityHead h11'>QUALITY STANDARDS</h1>
    </div>
    <Container>
        <div className="qualityContainer mt-5 w-80">
        <h1 className='fw-bold'>Our Commitment to Quality at Rug-Rel Components & Systems Pvt. Ltd.</h1>
        <br />
        <p>At Rug-Rel Components & Systems Pvt. Ltd., quality is ingrained in every aspect of our operations. We prioritize excellence by continually refining our quality management system to meet the stringent demands of the defence and aerospace industries. Our products are meticulously engineered and manufactured to exceed industry standards, ensuring robustness and reliability in every component.</p>
        <br />
        <p>We are dedicated to surpassing customer expectations while adhering rigorously to global regulatory requirements. Our quality management systems are aligned with leading standards such as AS9100, reflecting our unwavering commitment to delivering superior solutions for defence applications.</p>
        <br />
        <p>Experience firsthand why Rug-Rel Components & Systems Pvt. Ltd. is recognized for quality assurance in defence and aerospace manufacturing. Contact us today to discover how our dedication to excellence can elevate your projects.</p>
        <br />
        </div>
       
    </Container>
    <SecondBanner />
    </>

  )
}

export default QualityStdMain;