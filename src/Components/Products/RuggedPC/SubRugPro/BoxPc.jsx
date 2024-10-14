import React, { useEffect } from 'react';
import TitleData from '../../TitleData/TitleData';
import ProductsInfo from '../../ProductInfo&Data/ProductsInfo';
import DisplayData from '../../ProductInfo&Data/DisplayData';
import ProductFeature from '../../ProductInfo&Data/ProductFeature';
import { PD_Data} from '../../ProductInfo&Data/ProductsAllData';
import ProductsData from '../../ProductInfo&Data/ProductsData';
import ContactDetail from '../../../ContactUs/ContactDetail';
import ContactMap from '../../../ContactUs/ContactMap';
import HeadNavBar from '../../../HEADER/HeadNavBar';
import Footer from '../../../FOOTER/Footer';
import MapDetails from '../../../ContactUs/MapDetails';
import { AllFeatureData } from '../../ProductInfo&Data/AllFeatureData';
import { AllDescriptionData } from '../../ProductInfo&Data/AllDescriptionData';
import { AllImagesData } from '../../ProductInfo&Data/AllImagesData';

const BoxPc = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title=" Rugged Box Pc" />
      <ProductsData
        data={[
          {
            label: PD_Data.Box_value1[0],
            link: "#box1",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.Box_value2[0],
            link: "/rug-pc",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />

      <ProductsInfo
        id="box1"
        mainTitle="Military Grade Rugged BOX PC"
        head="Rugged Box PC Description"
        sliderImages={AllImagesData.sliderImages_Box}
        texts={AllDescriptionData.texts_Box1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_Box1} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default BoxPc;