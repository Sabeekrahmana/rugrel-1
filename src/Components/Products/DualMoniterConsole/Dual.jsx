import React, { useEffect } from "react";
import TitleData from "../TitleData/TitleData";
import ContactDetail from "../../ContactUs/ContactDetail";
import ContactMap from "../../ContactUs/ContactMap";
import {
  ProductsAllData,
  ProductsAllText,
  PD_Data,
} from "../ProductInfo&Data/ProductsAllData";
import ProductFeature from "../ProductInfo&Data/ProductFeature";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import DisplayData from "../ProductInfo&Data/DisplayData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import MapDetails from "../../ContactUs/MapDetails";

const Dual = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <HeadNavBar />
      <TitleData Title="Dual Moniter Console" />
      <ProductsData
        data={[
          {
            label: PD_Data.DCM1_value1[0],
            link: "#dual1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.DCM1_value1[0],
            link: "#dual2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.DCM1_value1[0],
            link: "#dual3",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="dual1"
        mainTitle="Dual Moniter Console "
        head="Dual Moniter Console"
        img={ProductsAllText.img_DMC1}
        texts={ProductsAllText.texts_DMC1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={ProductsAllData.featureList_DMC1} />
      <ProductsInfo
        id="dual2"
        mainTitle="Dual Moniter Console"
        head="Dual Moniter Console"
        img={ProductsAllText.img_DMC2}
        texts={ProductsAllText.texts_DMC2}
      />
      <ProductFeature features={ProductsAllData.featureList_DMC2} />
      <ProductsInfo
        id="dual3"
        mainTitle="Dual Moniter Console"
        head="Dual Moniter Console"
        img={ProductsAllText.img_DMC3}
        texts={ProductsAllText.texts_DMC3}
      />
      <ProductFeature features={ProductsAllData.featureList_DMC3} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default Dual;
