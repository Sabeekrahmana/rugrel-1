import React, { useEffect } from "react";
import TitleData from "../TitleData/TitleData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import {
  PD_Data,
  ProductsAllData,
  ProductsAllText,
} from "../ProductInfo&Data/ProductsAllData";
import ContactDetail from "../../ContactUs/ContactDetail";
import ContactMap from "../../ContactUs/ContactMap";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import DisplayData from "../ProductInfo&Data/DisplayData";
import ProductFeature from "../ProductInfo&Data/ProductFeature";
import OrderingInfo from "./OrderingInfo";
import Footer from "../../FOOTER/Footer";
import HeadNavBar from "../../HEADER/HeadNavBar";
import MapDetails from "../../ContactUs/MapDetails";


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
        mainTitle="VPX Back Plane Desgin "
        head="VPX Backplane Part"
        img={ProductsAllText.img_BP1}
        texts={ProductsAllText.texts_BP1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={ProductsAllData.featureList_BP1} />
      {/* <-----------------------------second--------------------> */}
      <ProductsInfo
        id="VME"
        mainTitle="VME Back Plane Desgin "
        head="VME Backplane Part"
        img={ProductsAllText.img_BP2}
        texts={ProductsAllText.texts_BP2}
      />
      <ProductFeature features={ProductsAllData.featureList_BP2} />
      {/* <-----------------------------third--------------------> */}
      <ProductsInfo
        id="VME64X"
        mainTitle="VME64X Back Plane Desgin "
        head="VME64X Backplane Part"
        img={ProductsAllText.img_BP3}
        texts={ProductsAllText.texts_BP3}
      />
      <ProductFeature features={ProductsAllData.featureList_BP3} />
      {/* <-----------------------------fourth--------------------> */}
      <ProductsInfo
        id="VSX"
        mainTitle="VSX Back Plane Desgin "
        head="VSX Backplane Part"
        img={ProductsAllText.img_BP4}
        texts={ProductsAllText.texts_BP4}
      />
      <ProductFeature features={ProductsAllData.featureList_BP4} />
      {/* <-----------------------------fith--------------------> */}
      <ProductsInfo
        id="Compact"
        mainTitle="Compact PCI  Back Plane Desgin "
        head="Compact PCI  Backplane Part"
        img={ProductsAllText.img_BP5}
        texts={ProductsAllText.texts_BP5}
      />
      <ProductFeature features={ProductsAllData.featureList_BP5} />
      {/* <-----------------------------sixth--------------------> */}
      <ProductsInfo
        id="Open"
        mainTitle="3U 3Slot Open VPX Backplane "
        head="3U 3Slot Open VPX Backplane"
        img={ProductsAllText.img_BP6}
        texts={ProductsAllText.texts_BP6}
      />
      <ProductFeature features={ProductsAllData.featureList_BP6} />
      {/* <-----------------------------sixth--------------------> */}
      <ProductsInfo
        mainTitle="6U/7U VME64X  Backplane "
        head="6U/7U VME64X Backplane"
        img={ProductsAllText.img_BP7}
        texts={ProductsAllText.texts_BP7}
      />
      <ProductFeature features={ProductsAllData.featureList_BP7} />

      <OrderingInfo/>
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default BackPlane;
