import React from 'react';
import HeadNavBar from '../../../HEADER/HeadNavBar';
import TitleData from '../../TitleData/TitleData';
import ProductsData from '../../ProductInfo&Data/ProductsData';
import { PD_Data } from '../../ProductInfo&Data/ProductsAllData';
import ProductsInfo from '../../ProductInfo&Data/ProductsInfo';
import { AllImagesData } from '../../ProductInfo&Data/AllImagesData';
import { AllDescriptionData } from '../../ProductInfo&Data/AllDescriptionData';
// import DisplayData from '../../ProductInfo&Data/DisplayData';
import ProductFeature from '../../ProductInfo&Data/ProductFeature';
import { AllFeatureData } from '../../ProductInfo&Data/AllFeatureData';
import ContactDetail from '../../../ContactUs/ContactDetail';
import ContactMap from '../../../ContactUs/ContactMap';
import MapDetails from '../../../ContactUs/MapDetails';
import Footer from '../../../FOOTER/Footer';

const RugMonitor = () => {
  return (
    <>
      <HeadNavBar />
      <TitleData Title="Rugged  Monitor " />
      <ProductsData
        data={[
          {
            label: PD_Data.Monitor_value1[0],
            link: "#Monitor1",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Monitor_value2[0],
            link: "#Monitor2",
            sm: 12,
            md: 6,
            lg: 4,
          },
          {
            label: PD_Data.Monitor_value3[0],
            link: "/panel-pc",
            sm: 12,
            md: 6,
            lg: 4,
          },
        ]}
      />
      <ProductsInfo
        id="Monitor1"
        mainTitle="  RM-0313-15 Monitor "
        head="RM-0313-15 Monitor Description"
        sliderImages={AllImagesData.sliderImagesMointor_one}
        texts={AllDescriptionData.texts_monitor1}
      />
      {/* <DisplayData
        PDD1="MIL STD 704F "
        PDD2="MIL STD 461F "
        PDD3="MIL STD 810G "
        PTD1="Complied"
        PTD2="Complied"
        PTD3="Complied"
      /> */}
      <ProductFeature features={AllFeatureData.featureList_Monitor1} />
      <ProductsInfo
        id="Monitor2"
        mainTitle=" A600 17 Fanless Resistance Monitor "
        head="A600 17 Fanless Resistance Monitor Description "
        sliderImages={AllImagesData.sliderImagesMointor_two}
        texts={AllDescriptionData.texts_monitor2}
      />
      <ProductFeature features={AllFeatureData.featureList_Monitor2} />

      <ContactDetail />
      <ContactMap />
      <MapDetails />
      <Footer />
    </>
  );
}

export default RugMonitor;