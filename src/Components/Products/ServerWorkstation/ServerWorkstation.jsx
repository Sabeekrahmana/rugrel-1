import React, { useEffect } from 'react';
import TitleData from '../TitleData/TitleData';
import ProductsData from '../ProductInfo&Data/ProductsData';
import { PD_Data} from "../ProductInfo&Data/ProductsAllData";
import ProductsInfo from '../ProductInfo&Data/ProductsInfo';
// import DisplayData from '../ProductInfo&Data/DisplayData';
import ProductFeature from '../ProductInfo&Data/ProductFeature';
import ContactDetail from '../../ContactUs/ContactDetail';
import ContactMap from '../../ContactUs/ContactMap';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import MapDetails from '../../ContactUs/MapDetails';
import { AllFeatureData } from '../ProductInfo&Data/AllFeatureData';
import { AllDescriptionData } from '../ProductInfo&Data/AllDescriptionData';
import { AllImagesData } from '../ProductInfo&Data/AllImagesData';

const ServerWorkstation = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title="Servers and Workstation" />
      <ProductsData
        data={[
          // {
          //   // label: PD_Data.SW_value1[0],
          //   link: "#sw1",
          //   sm: 12,
          //   md: 6,
          //   lg: 4,
          // },
          {
            label: PD_Data.SW_value2[0],
            link: "#sw2",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.SW_value3[0],
            link: "/work-station",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />
      {/* <ProductsInfo
        id="sw1"
        mainTitle="Servers and Workstation "
        head="Servers and Workstation Description "
        sliderImages={AllImagesData.sliderImagesSW_one}
        texts={AllDescriptionData.texts_SW1}
      /> */}
      {/* <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_SW1} /> */}
      <ProductsInfo
        id="sw2"
        mainTitle=" Rugged Servers  "
        head="Rugged Servers Description "
        sliderImages={AllImagesData.sliderImagesSW_two}
        texts={AllDescriptionData.texts_SW2}
      />
      <ProductFeature features={AllFeatureData.featureList_SW2} />
      <ProductsInfo
        mainTitle="Rugged Workstation "
        head=" Rugged Workstation Description"
        sliderImages={AllImagesData.sliderImagesSW_three}
        texts={AllDescriptionData.texts_SW3}
      />
      <ProductFeature features={AllFeatureData.featureList_SW3} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default ServerWorkstation;