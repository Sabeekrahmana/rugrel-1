import React from 'react';
import HeadNavBar from '../../../HEADER/HeadNavBar';
import TitleData from '../../TitleData/TitleData';
import { PD_Data } from '../../ProductInfo&Data/ProductsAllData';
import ProductsData from '../../ProductInfo&Data/ProductsData';
import ProductsInfo from '../../ProductInfo&Data/ProductsInfo';
import DisplayData from '../../ProductInfo&Data/DisplayData';
import { AllImagesData } from '../../ProductInfo&Data/AllImagesData';
import { AllFeatureData } from '../../ProductInfo&Data/AllFeatureData';
import ProductFeature from '../../ProductInfo&Data/ProductFeature';
import ContactDetail from '../../../ContactUs/ContactDetail';
import ContactMap from '../../../ContactUs/ContactMap';
import MapDetails from '../../../ContactUs/MapDetails';
import Footer from '../../../FOOTER/Footer';
import { AllDescriptionData } from '../../ProductInfo&Data/AllDescriptionData';

const StandardPSU = () => {
  return (
    <>
      <HeadNavBar />
      <TitleData Title="Standard Power Supply Unit" />

      <ProductsData
        data={[
          {
            label: PD_Data.SPSU_value1[0],
            link: "#3U",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.SPSU_value2[0],
            link: "#6U",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.SPSU_value3[0],
            link: "/customPSU",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="3U"
        mainTitle="3U VPX Power Supply Unit"
        head="3U VPX Power Supply Unit Description"
        sliderImages={AllImagesData.sliderImgSPSU_one}
        texts={AllDescriptionData.texts_SPSU1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList1} />
      <ProductsInfo
        id="6U"
        mainTitle="6U VPX Power Supply Unit"
        head="6U VPX Power Supply Unit Description"
        sliderImages={AllImagesData.sliderImgSPSU_two}
        texts={AllDescriptionData.texts_SPSU2}
      />
      <ProductFeature features={AllFeatureData.featureList1} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default StandardPSU;