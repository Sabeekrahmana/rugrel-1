import React, { useEffect } from "react";
import TitleData from "../TitleData/TitleData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import {PD_Data} from "../ProductInfo&Data/ProductsAllData";
import ContactDetail from "../../ContactUs/ContactDetail";
import ContactMap from "../../ContactUs/ContactMap";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import DisplayData from "../ProductInfo&Data/DisplayData";
import ProductFeature from "../ProductInfo&Data/ProductFeature";
import OrderingInfo from "./OrderingInfo";
import Footer from "../../FOOTER/Footer";
import HeadNavBar from "../../HEADER/HeadNavBar";
import MapDetails from "../../ContactUs/MapDetails";
import { AllFeatureData } from "../ProductInfo&Data/AllFeatureData";
import { AllImagesData } from "../ProductInfo&Data/AllImagesData";
import { AllDescriptionData } from "../ProductInfo&Data/AllDescriptionData";
import ImageToggleComponent from "./ImageToggleComponent";


const BackPlane = () => {

  useEffect(() => window.scroll(0, 0), []);
  
  return (
    <>
      <HeadNavBar />
      <TitleData Title="BackPlane Power Supply Unit" />
      <ProductsData
        data={[
          {
            label: PD_Data.BP_value1[0],
            link: "#VPX",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.BP_value2[0],
            link: "#VME",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.BP_value3[0],
            link: "#VME64X",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.BP_value4[0],
            link: "#VSX",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.BP_value5[0],
            link: "#Compact",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.BP_value6[0],
            link: "#Open",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="VPX"
        mainTitle="VPX Backplane  "
        head="VPX Backplane  Description"
        sliderImages={AllImagesData.sliderImages_BP1}
        texts={AllDescriptionData.texts_BP1}
      />
      <ImageToggleComponent />

      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_BP1} />
      {/* <-----------------------------second--------------------> */}
      <ProductsInfo
        id="VME"
        mainTitle="VME Backplane  "
        head="VME Backplane Description "
        sliderImages={AllImagesData.sliderImages_sec}
        texts={AllDescriptionData.texts_BP2}
      />
      <ProductFeature features={AllFeatureData.featureList_BP2} />
      {/* <-----------------------------third--------------------> */}
      <ProductsInfo
        id="VME64X"
        mainTitle="VME64X Backplane "
        head="VME64X Backplane  Description"
        sliderImages={AllImagesData.sliderImages_three}
        texts={AllDescriptionData.texts_BP3}
      />
      <ProductFeature features={AllFeatureData.featureList_BP3} />
      {/* <-----------------------------fourth--------------------> */}
      <ProductsInfo
        id="VSX"
        mainTitle="VSX Backplane"
        head="VSX Backplane "
        sliderImages={AllImagesData.sliderImages_four}
        texts={AllDescriptionData.texts_BP4}
      />
      <ProductFeature features={AllFeatureData.featureList_BP4} />
      {/* <-----------------------------fith--------------------> */}
      <ProductsInfo
        id="Compact"
        mainTitle="Compact PCI  Backplane "
        head="Compact PCI  Backplane Description"
        sliderImages={AllImagesData.sliderImages_five}
        texts={AllDescriptionData.texts_BP5}
      />
      <ProductFeature features={AllFeatureData.featureList_BP5} />
      {/* <-----------------------------sixth--------------------> */}
      <ProductsInfo
        id="Open"
        mainTitle="Customize Backplane "
        head="Customize Backplane Description"
        sliderImages={AllImagesData.sliderImages_six}
        texts={AllDescriptionData.texts_BP6}
      />
      <ProductFeature features={AllFeatureData.featureList_BP6} />
      {/* <-----------------------------seven--------------------> */}
      {/* <ProductsInfo
        mainTitle="6U/7U VME64X  Backplane "
        head="6U/7U VME64X Backplane Description"
        sliderImages={AllImagesData.sliderImages_seven}
        texts={AllDescriptionData.texts_BP7}
      />
      <ProductFeature features={AllFeatureData.featureList_BP7} /> */}

      <OrderingInfo />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default BackPlane;
