import React, { useEffect } from "react";
import TitleData from "../TitleData/TitleData";
import ProductsData from "../ProductInfo&Data/ProductsData";
import { PD_Data } from "../ProductInfo&Data/ProductsAllData";
import ProductsInfo from "../ProductInfo&Data/ProductsInfo";
import DisplayData from "../ProductInfo&Data/DisplayData";
import ProductFeature from "../ProductInfo&Data/ProductFeature";
import ContactDetail from "../../ContactUs/ContactDetail";
import ContactMap from "../../ContactUs/ContactMap";
import HeadNavBar from "../../HEADER/HeadNavBar";
import Footer from "../../FOOTER/Footer";
import MapDetails from "../../ContactUs/MapDetails";
import { AllFeatureData } from "../ProductInfo&Data/AllFeatureData";
import { AllDescriptionData } from "../ProductInfo&Data/AllDescriptionData";
import { AllImagesData } from "../ProductInfo&Data/AllImagesData";
import RugPcSizes from "./RugPcSizes";
import { Container } from "react-bootstrap";

const RugPC = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title="Rugged PC" />
      <ProductsData
        data={[
          {
            label: PD_Data.RP_value1[0],
            link: "/laptop",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.RP_value2[0],
            link: "/tablet",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.RP_value3[0],
            link: "/box",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="dual1"
        mainTitle="Rugged Laptop "
        head="Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_RPC_one}
        texts={AllDescriptionData.texts_RPC1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_RPC1} />

      <ProductsInfo
        id=""
        mainTitle="Rugged Tablet "
        head="Rugged Tablet Description "
        sliderImages={AllImagesData.sliderImages_RPC_two}
        texts={AllDescriptionData.texts_RPC2}
      />
      <ProductFeature features={AllFeatureData.featureList_RPC2} />
      <ProductsInfo
        id=""
        mainTitle=" Rugged Box Pc"
        head="Rugged Box Pc Description"
        sliderImages={AllImagesData.sliderImages_RPC_three}
        texts={AllDescriptionData.texts_RPC3}
      />
      <ProductFeature features={AllFeatureData.featureList_RPC3} />
      <Container className=" d-flex">
        <RugPcSizes />
        {/* <RugPcSizes /> */}
      </Container>

      <ContactDetail />
      <ContactMap />

      <MapDetails />
      <Footer />
    </>
  );
};

export default RugPC;
