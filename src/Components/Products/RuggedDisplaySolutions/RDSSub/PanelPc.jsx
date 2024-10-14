import React, { useEffect } from 'react';
import HeadNavBar from '../../../HEADER/HeadNavBar';
import TitleData from '../../TitleData/TitleData';
import ProductsData from '../../ProductInfo&Data/ProductsData';
import { PD_Data } from '../../ProductInfo&Data/ProductsAllData';
import { AllDescriptionData } from '../../ProductInfo&Data/AllDescriptionData';
import ProductsInfo from '../../ProductInfo&Data/ProductsInfo';
// import DisplayData from '../../ProductInfo&Data/DisplayData';
import ProductFeature from '../../ProductInfo&Data/ProductFeature';
import { AllFeatureData } from '../../ProductInfo&Data/AllFeatureData';
import ContactDetail from '../../../ContactUs/ContactDetail';
import ContactMap from '../../../ContactUs/ContactMap';
import MapDetails from '../../../ContactUs/MapDetails';
import Footer from '../../../FOOTER/Footer';
import { AllImagesData } from '../../ProductInfo&Data/AllImagesData';



const PanelPc = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title="Rugged  Panel PC " />
      <ProductsData
        data={[
          {
            label: PD_Data.PPC_value1[0],
            link: "/rug-display-solutions",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.PPC_value2[0],
            link: "/rug-monitor",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.PPC_value3[0],
            link: "#PPC2",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="PPC1"
        mainTitle="Rugged 0313-241-Panel pc "
        head="Rugged 0313-241-Panel pc Description"
        sliderImages={AllImagesData.sliderImagesPPC_one}
        texts={AllDescriptionData.texts_PPC1}
      />

      {/* <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      /> */}

      <ProductFeature features={AllFeatureData.featureList_PPC1} />
      <ProductsInfo
        id="PPC2"
        mainTitle="7 Inch Rugged Panel PC "
        head="7 Inch Rugged Panel PC Description"
        sliderImages={AllImagesData.sliderImagesPPC_two}
        texts={AllDescriptionData.texts_PPC2}
      />
      <ProductFeature features={AllFeatureData.featureList_PPC2} />
      <ProductsInfo
        id="PPC2"
        mainTitle="15 INDUSTRIAL PANEL PC"
        head="15 INDUSTRIAL PANEL PC Description"
        sliderImages={AllImagesData.sliderImagesPPC_three}
        texts={AllDescriptionData.texts_PPC3}
      />
      <ProductFeature features={AllFeatureData.featureList_PPC3} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default PanelPc;