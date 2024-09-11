import React, { useEffect, useState } from "react";
import ContactDetail from "../../ContactUs/ContactDetail";
import ContactMap from "../../ContactUs/ContactMap";
import TitleData from "../TitleData/TitleData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import {
  ProductsAllText,
  ProductsAllData,
  PD_Data,
} from "../ProductInfo&Data/ProductsAllData";
import DisplayData from "../ProductInfo&Data/DisplayData";
import ProductFeature from "../ProductInfo&Data/ProductFeature";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import MapDetails from "../../ContactUs/MapDetails";
import "../PRO-CSS/ProCss.css";

const PowerSupplyUnit = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <HeadNavBar />
      <TitleData Title="Power Supply Unit" />

      <ProductsData
        data={[
          {
            label: PD_Data.PSU_value[0],
            link: "#stand",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.PSU_value2[0],
            link: "/customPSU",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />

      <ProductsInfo
        id="stand"
        mainTitle="Standard Power Supply Unit"
        head="VITA 62 3U ISOLATED 350W 28VDC POWER SUPPLY"
        img={ProductsAllText.img}
        texts={ProductsAllText.texts}
      />

      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature
        features={ProductsAllData.featureList1}
      />

      {/* ----------PART SECOND----------- */}
      <ProductsInfo
        mainTitle="Standard Power Supply Unit"
        head="VITA 62 3U ISOLATED 350W 28VDC POWER SUPPLY"
        img={ProductsAllText.img_1}
        texts={ProductsAllText.texts_1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature
        features={ProductsAllData.featureList1}
        // Application={ProductsAllData.Application}
      />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default PowerSupplyUnit;
