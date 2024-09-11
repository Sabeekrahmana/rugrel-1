import React, { useEffect } from 'react'
import TitleData from '../TitleData/TitleData';
import ProductsData from '../ProductInfo&Data/ProductsData';
import { PD_Data, ProductsAllText,ProductsAllData } from "../ProductInfo&Data/ProductsAllData";
import ProductsInfo from '../ProductInfo&Data/ProductsInfo';
import DisplayData from '../ProductInfo&Data/DisplayData';
import ProductFeature from '../ProductInfo&Data/ProductFeature';
import ContactDetail from '../../ContactUs/ContactDetail';
import ContactMap from '../../ContactUs/ContactMap';
import HeadNavBar from '../../HEADER/HeadNavBar';
import Footer from '../../FOOTER/Footer';
import MapDetails from '../../ContactUs/MapDetails';


const RugDisplaySolution = () => {

  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
    <HeadNavBar />
      <TitleData Title="Rugged Display Solution Part" />
      <ProductsData
        data={[
          {
            label: PD_Data.RDS_value1[0],
            link: "#RDS1",
            sm: 12,
            md: 6,
            lg: 6,
          },
          {
            label: PD_Data.RDS_value2[0],
            link: "/panel-pc",
            sm: 12,
            md: 6,
            lg: 6,
          },
        ]}
      />

      <ProductsInfo
        id="RDS1"
        mainTitle="Rugged Display Solution  "
        head="Rugged Moniter Solution "
        img={ProductsAllText.img_RDS1}
        texts={ProductsAllText.texts_RDS1}
      />

      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />

      <ProductFeature features={ProductsAllData.featureList_RDS1} />

      <ProductsInfo
        id="RDS2"
        mainTitle="Rugged Panel PC "
        head="Rugged Panel PC "
        img={ProductsAllText.img_RDS2}
        texts={ProductsAllText.texts_RDS2}
      />
      <ProductFeature features={ProductsAllData.featureList_RDS2} />
      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default RugDisplaySolution;