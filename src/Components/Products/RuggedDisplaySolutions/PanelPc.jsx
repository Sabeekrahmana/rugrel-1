import React, { useEffect } from 'react';
import TitleData from '../TitleData/TitleData';
import ProductsData from '../ProductInfo&Data/ProductsData';
import { PD_Data, ProductsAllData, ProductsAllText } from '../ProductInfo&Data/ProductsAllData';
import DisplayData from '../ProductInfo&Data/DisplayData';
import ProductsInfo from '../ProductInfo&Data/ProductsInfo';
import ProductFeature from '../ProductInfo&Data/ProductFeature';
import ContactDetail from '../../ContactUs/ContactDetail';
import ContactMap from '../../ContactUs/ContactMap';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import MapDetails from '../../ContactUs/MapDetails';

const PanelPc = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <HeadNavBar />
      <TitleData Title="Rugged  Panel PC " />
      <ProductsData
        data={[
          {
            label: PD_Data.PPC_value1[0],
            link: "/rug-display-solutions",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.PPC_value2[0],
            link: "#PPC2",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />
      <ProductsInfo
        id="PPC1"
        mainTitle="Rugged Panel PC"
        head="Rugged Panel PC  "
        img={ProductsAllText.img_PPC1}
        texts={ProductsAllText.texts_PPC1}
      />

      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />

      <ProductFeature features={ProductsAllData.featureList_PPC1} />
      <ProductsInfo
        id="PPC2"
        mainTitle="Rugged Panel PC"
        head="Rugged Panel PC"
        img={ProductsAllText.img_PPC2}
        texts={ProductsAllText.texts_PPC2}
      />
      <ProductFeature features={ProductsAllData.featureList_PPC2} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default PanelPc;