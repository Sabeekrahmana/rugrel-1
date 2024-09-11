import React, { useEffect } from 'react';
import TitleData from '../../TitleData/TitleData';
import ContactMap from '../../../ContactUs/ContactMap';
import ContactDetail from '../../../ContactUs/ContactDetail';
import ProductsData from '../../ProductInfo&Data/ProductsData';
import { PD_Data, ProductsAllData, ProductsAllText } from '../../ProductInfo&Data/ProductsAllData';
import ProductsInfo from '../../ProductInfo&Data/ProductsInfo';
import DisplayData from '../../ProductInfo&Data/DisplayData';
import ProductFeature from '../../ProductInfo&Data/ProductFeature';
import HeadNavBar from '../../../HEADER/HeadNavBar';
import Footer from '../../../FOOTER/Footer';
import MapDetails from '../../../ContactUs/MapDetails';

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
            link: "#loptop1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value2[0],
            link: "#loptop2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value3[0],
            link: "#loptop3",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value4[0],
            link: "#loptop4",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Loptop_value5[0],
            link: "#loptop5",
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
        id="loptop1"
        mainTitle="12.2 Inch RQ79-J Rugged Laptop"
        head="12.2 Inch RQ79-J Rugged Laptop"
        img={ProductsAllText.img_Loptop1}
        texts={ProductsAllText.texts_Loptop1}
      />
      <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      />
      <ProductFeature features={ProductsAllData.featureList_Loptop1} />
      {/* second */}
      <ProductsInfo
        id="loptop2"
        mainTitle="12.2 Inch RQ79-M Rugged Laptop "
        head="12.2 Inch RQ79-M Rugged Laptop"
        img={ProductsAllText.img_Loptop2}
        texts={ProductsAllText.texts_Loptop2}
      />
      <ProductFeature features={ProductsAllData.featureList_Loptop2} />
      {/* third */}
      <ProductsInfo
        id="loptop3"
        mainTitle="13.3 inch Rugged Laptop"
        head="13.3 inch Rugged Laptop"
        img={ProductsAllText.img_Loptop3}
        texts={ProductsAllText.texts_Loptop3}
      />
      <ProductFeature features={ProductsAllData.featureList_Loptop3} />
      {/* fouth */}
      <ProductsInfo
        id="loptop4"
        mainTitle="14 inch Rugged Laptop "
        head="14 inch Rugged Laptop"
        img={ProductsAllText.img_Loptop4}
        texts={ProductsAllText.texts_Loptop4}
      />
      <ProductFeature features={ProductsAllData.featureList_Loptop4} />
      {/* fiveth */}
      <ProductsInfo
        id="loptop5"
        mainTitle="15.6 inch Rugged Laptop "
        head="15.6 inch Rugged Laptop"
        img={ProductsAllText.img_Loptop5}
        texts={ProductsAllText.texts_Loptop5}
      />
      <ProductFeature features={ProductsAllData.featureList_Loptop5} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default RugLoptop;