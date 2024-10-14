import React, { useEffect } from "react";
import TitleData from "../../TitleData/TitleData";
import ContactMap from "../../../ContactUs/ContactMap";
import ContactDetail from "../../../ContactUs/ContactDetail";
import ProductsData from "../../ProductInfo&Data/ProductsData";
import { PD_Data } from "../../ProductInfo&Data/ProductsAllData";
import ProductsInfo from "../../ProductInfo&Data/ProductsInfo";
import DisplayData from "../../ProductInfo&Data/DisplayData";
import ProductFeature from "../../ProductInfo&Data/ProductFeature";
import HeadNavBar from "../../../HEADER/HeadNavBar";
import Footer from "../../../FOOTER/Footer";
import MapDetails from "../../../ContactUs/MapDetails";
import { AllFeatureData } from "../../ProductInfo&Data/AllFeatureData";
import { AllDescriptionData } from "../../ProductInfo&Data/AllDescriptionData";
import { AllImagesData } from "../../ProductInfo&Data/AllImagesData";
// import PcCards from "../PcCards";

const RugLoptop = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <HeadNavBar />
      <TitleData Title=" Rugged Loptops" />
      <ProductsData
        data={[
          {
            label: PD_Data.Loptop_value1[0],
            link: "#lap1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value2[0],
            link: "#lap2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value3[0],
            link: "#lap3",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value4[0],
            link: "#lap4",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value5[0],
            link: "#lap5",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value6[0],
            link: "/rug-pc",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="lap1"
        mainTitle="12.2 Inch RQ79-J Rugged Laptop"
        head="12.2 Inch RQ79-J Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_Lap_one}
        texts={AllDescriptionData.texts_Loptop1}
      />

      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={AllFeatureData.featureList_Loptop1} />
      {/* second */}
      <ProductsInfo
        id="lap2"
        mainTitle="12.2 Inch RQ79-M Rugged Laptop "
        head="12.2 Inch RQ79-M Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_Lap_two}
        texts={AllDescriptionData.texts_Loptop2}
      />
      <ProductFeature features={AllFeatureData.featureList_Loptop2} />
      {/* third */}
      <ProductsInfo
        id="lap3"
        mainTitle="13.3 inch Rugged Laptop"
        head="13.3 inch Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_Lap_three}
        texts={AllDescriptionData.texts_Loptop3}
      />
      <ProductFeature features={AllFeatureData.featureList_Loptop3} />
      {/* fouth */}
      <ProductsInfo
        id="lap4"
        mainTitle="14 inch Rugged Laptop "
        head="14 inch Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_Lap_four}
        texts={AllDescriptionData.texts_Loptop4}
      />
      <ProductFeature features={AllFeatureData.featureList_Loptop4} />
      {/* fiveth */}
      <ProductsInfo
        id="lap5"
        mainTitle="15.6 inch Rugged Laptop "
        head="15.6 inch Rugged Laptop Description"
        sliderImages={AllImagesData.sliderImages_Lap_five}
        texts={AllDescriptionData.texts_Loptop5}
      />
      <ProductFeature features={AllFeatureData.featureList_Loptop5} />
      {/* <PcCards/> */}
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
};

export default RugLoptop;
