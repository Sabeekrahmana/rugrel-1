import React, { useEffect } from 'react';
import TitleData from '../TitleData/TitleData';
import ProductsData from '../ProductInfo&Data/ProductsData';
import { PD_Data } from '../ProductInfo&Data/ProductsAllData';
import ProductsInfo from '../ProductInfo&Data/ProductsInfo';
import DisplayData from '../ProductInfo&Data/DisplayData';
import ProductFeature from '../ProductInfo&Data/ProductFeature';
import ContactMap from '../../ContactUs/ContactMap';
import ContactDetail from '../../ContactUs/ContactDetail';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import MapDetails from '../../ContactUs/MapDetails';
import { AllFeatureData } from '../ProductInfo&Data/AllFeatureData';
import { AllDescriptionData } from '../ProductInfo&Data/AllDescriptionData';
import { AllImagesData } from '../ProductInfo&Data/AllImagesData';

const Workstation = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title=" Rug-Rel Workstation " />
      <ProductsData
        data={[
          {
            label: PD_Data.W_value1[0],
            link: "#W",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.W_value2[0],
            link: "/servers-workstations",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />
      <ProductsInfo
        id="W"
        mainTitle=" WorkStation "
        head=" WorkStation Description "
        sliderImages={AllImagesData.sliderImagesWorksation_one}
        texts={AllDescriptionData.texts_W1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_W1} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default Workstation;