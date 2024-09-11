import React from "react";
// import 'Custom.css'
import TitleData from "../../TitleData/TitleData";
import { ProductsAllText } from "../../ProductInfo&Data/ProductsAllData";
import ProductsInfo from "../../ProductInfo&Data/ProductsInfo";
import DisplayData from "../../ProductInfo&Data/DisplayData";
import ProductFeature from "../../ProductInfo&Data/ProductFeature";
import ContactDetail from "../../../ContactUs/ContactDetail";
import ContactMap from "../../../ContactUs/ContactMap";
import {
  ProductsAllData,
  PD_Data,
} from "../../ProductInfo&Data/ProductsAllData";
import ProductsData from "../../ProductInfo&Data/ProductsData";
import HeadNavBar from "../../../HEADER/HeadNavBar";
import Footer from "../../../FOOTER/Footer";
import MapDetails from "../../../ContactUs/MapDetails";

const CustomPSU = () => {
  return (
    <>
    <HeadNavBar />
      <TitleData Title="Custom Power Supply Unit" />
      <ProductsData
        data={[
          {
            label: PD_Data.CPSU_value1[0],
            link: "#cuss",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.CPSU_value2[0],
            link: "/power-supply-unit",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />
      <ProductsInfo
      id="cuss"
        mainTitle="Customs Power Supply Unit"
        head="VITA 62 3U ISOLATED 350W 28VDC POWER SUPPLY"
        img={ProductsAllText.img_C1}
        texts={ProductsAllText.texts_C1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />

      <ProductFeature features={ProductsAllData.featureList_C1} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default CustomPSU;

