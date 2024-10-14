import React, { useEffect } from 'react';
// import HomeCarousel from './Carousel/HomeCarousel';
import Custom from './Custom/Custom';
import Service from './Services/Service';
import WhyRugRel from './WhyChoose/WhyRugRel';
import IndustrialSolutions from './IndSol/IndustrialSolutions ';
import EnquiryForm from './Enquiry/EnquiryForm';
import UpcomingEvents from './Upcoming/UpcomingEvents';
// import Carouselslider from './Slick_Slider/Carouselslider';
import Footer from '../FOOTER/Footer';
import HeadNavBar from '../HEADER/HeadNavBar';
import HomeCarousel from './Carousel/HomeCarousel';

const LandingPage = () => {
  useEffect(() => window.scroll(0, 0),[])

  return (
    <>
        <HeadNavBar />
        <HomeCarousel />
        {/* <Carouselslider /> */}
        <Custom />
        <Service />
        <WhyRugRel />
        <IndustrialSolutions />
        <UpcomingEvents />
        <EnquiryForm />
        <Footer />
    </>
  )
}

export default LandingPage;