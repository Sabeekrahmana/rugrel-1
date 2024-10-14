import React, { useEffect } from "react";
import TitleData from "../TitleData/TitleData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import {
  PD_Data
} from "../ProductInfo&Data/ProductsAllData";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import DisplayData from '../ProductInfo&Data/DisplayData'
import ProductFeature from '../ProductInfo&Data/ProductFeature'
import ContactDetail from '../../ContactUs/ContactDetail'
import ContactMap from "../../ContactUs/ContactMap";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import MapDetails from "../../ContactUs/MapDetails";
import { AllFeatureData } from "../ProductInfo&Data/AllFeatureData";
import { AllDescriptionData } from "../ProductInfo&Data/AllDescriptionData";
import { AllImagesData } from "../ProductInfo&Data/AllImagesData";


const RadarComputer = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title="Radar Computer And ATR " />
      <ProductsData
        data={[
          {
            label: PD_Data.RCA_value1[0],
            link: "#RadarComputer",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.RCA_value2[0],
            link: "#ATR",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />
      <ProductsInfo
        id="RadarComputer"
        mainTitle="Radar Computer "
        head="Radar Computer Description"
        sliderImages={AllImagesData.sliderImagesRadar_one}
        texts={AllDescriptionData.texts_RCA1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_RCA1} />
      <ProductsInfo
        id="ATR"
        mainTitle="  Rugged ATR"
        head="ATR - Rugged Transportable Rack "
        sliderImages={AllImagesData.sliderImagesRadar_two}
        texts={AllDescriptionData.texts_RCA2}
      />

      <ProductFeature features={AllFeatureData.featureList_RCA2} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default RadarComputer;
