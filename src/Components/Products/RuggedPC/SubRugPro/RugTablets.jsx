import React, { useEffect } from "react";
import TitleData from "../../TitleData/TitleData";
import ProductsData from "../../ProductInfo&Data/ProductsData";
import { PD_Data } from "../../ProductInfo&Data/ProductsAllData";
import ProductsInfo from "../../ProductInfo&Data/ProductsInfo";
import DisplayData from "../../ProductInfo&Data/DisplayData";
import ProductFeature from "../../ProductInfo&Data/ProductFeature";
import ContactDetail from "../../../ContactUs/ContactDetail";
import ContactMap from "../../../ContactUs/ContactMap";
import HeadNavBar from "../../../HEADER/HeadNavBar";
import Footer from "../../../FOOTER/Footer";
import MapDetails from "../../../ContactUs/MapDetails";
import { AllFeatureData } from "../../ProductInfo&Data/AllFeatureData";
import { AllDescriptionData } from "../../ProductInfo&Data/AllDescriptionData";
import { AllImagesData } from "../../ProductInfo&Data/AllImagesData";

const RugTablets = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title=" Rugged Tablet" />
      <ProductsData
        data={[
          {
            label: PD_Data.Tablet_value1[0],
            link: "#Tablet1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Tablet_value2[0],
            link: "#Tablet2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Tablet_value3[0],
            link: "#Tablet3",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Tablet_value4[0],
            link: "#Tablet4",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Tablet_value5[0],
            link: "#Tablet5",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Tablet_value6[0],
            link: "/rug-pc",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />

      <ProductsInfo
        id="Tablet1"
        mainTitle="Rug-Rel 10.1 Inch Rugged Tablet "
        head="Rug-Rel 10.1 Inch Rugged Tablet Description"
        sliderImages={AllImagesData.sliderImages_Tap_one}
        texts={AllDescriptionData.texts_Tablet1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_Tablet1} />
      <ProductsInfo
        id="Tablet2"
        mainTitle="Rug-Rel 12.2 Inch Rugged Tablet "
        head="Rug-Rel 12.2 Inch Rugged Tablet Description"
        sliderImages={AllImagesData.sliderImages_Tap_two}
        texts={AllDescriptionData.texts_Tablet2}
      />
      <ProductFeature features={AllFeatureData.featureList_Tablet2} />
      {/*  */}
      <ProductsInfo
        id="Tablet3"
        mainTitle="RZ-I86HH Rugged Tablet "
        head="RZ-I86HH Rugged Tablet Description"
        sliderImages={AllImagesData.sliderImages_Tap_three}
        texts={AllDescriptionData.texts_Tablet3}
      />
      <ProductFeature features={AllFeatureData.featureList_Tablet3} />
      <ProductsInfo
        id="Tablet4"
        mainTitle="RZ-Q86 Rugged Tablet "
        head="RZ-Q86 Rugged Tablet Description"
        sliderImages={AllImagesData.sliderImages_Tap_four}
        texts={AllDescriptionData.texts_Tablet4}
      />
      <ProductFeature features={AllFeatureData.featureList_Tablet4} />
      <ProductsInfo
        id="Tablet5"
        mainTitle="RZ-Q865M Rugged Tablet"
        head="RZ-Q865M Rugged Tablet Description"
        sliderImages={AllImagesData.sliderImages_Tap_five}
        texts={AllDescriptionData.texts_Tablet5}
      />
      <ProductFeature features={AllFeatureData.featureList_Tablet5} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default RugTablets;
