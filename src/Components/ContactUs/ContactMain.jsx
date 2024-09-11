import React from 'react';
import ContactUs from './ContactUs';
import ContactDetail from './ContactDetail';
import ContactMap from './ContactMap';
import MapDetails from './MapDetails';
import ServiceBanner from "../Services/ServiceBanners/ServiceBanner";
import contactImg from "../../Assets/images/ContactImg/contact.jpg"; 
import HeadNavBar from '../HEADER/HeadNavBar';
import Footer from '../FOOTER/Footer';


const ContactMain = () => {
  return (
    <>
      <HeadNavBar />
      <ServiceBanner imageUrl={contactImg} heading="CONTACT US" />
      <ContactUs />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default ContactMain;