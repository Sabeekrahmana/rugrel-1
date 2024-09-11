import React, { useEffect } from 'react';
import TitleData from '../TitleData/TitleData';
import ProductsData from '../ProductInfo&Data/ProductsData';
import { PD_Data, ProductsAllText,ProductsAllData} from "../ProductInfo&Data/ProductsAllData";
import ProductsInfo from '../ProductInfo&Data/ProductsInfo';
import DisplayData from '../ProductInfo&Data/DisplayData';
import ProductFeature from '../ProductInfo&Data/ProductFeature';
import ContactDetail from '../../ContactUs/ContactDetail';
import ContactMap from '../../ContactUs/ContactMap';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import MapDetails from '../../ContactUs/MapDetails';

const ServerWorkstation = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <HeadNavBar />
      <TitleData Title="Servers and Workstation" />
      <ProductsData
        data={[
          {
            label: PD_Data.SW_value1[0],
            link: "#sw1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.SW_value2[0],
            link: "#sw2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.SW_value3[0],
            link: "/work-station",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="sw1"
        mainTitle="servers workstation "
        head="servers workstation "
        img={ProductsAllText.img_SW1}
        texts={ProductsAllText.texts_SW1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={ProductsAllData.featureList_SW1} />
      <ProductsInfo
        id="sw2"
        mainTitle="servers workstation "
        head=" servers workstation "
        img={ProductsAllText.img_SW2}
        texts={ProductsAllText.texts_SW2}
      />
      <ProductFeature features={ProductsAllData.featureList_SW2} />
      <ProductsInfo
        mainTitle="servers workstation "
        head="servers workstation"
        img={ProductsAllText.img_SW3}
        texts={ProductsAllText.texts_SW3}
      />
      <ProductFeature features={ProductsAllData.featureList_SW3} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default ServerWorkstation;