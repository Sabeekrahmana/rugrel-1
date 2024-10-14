import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/Home/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsEvents from "./Components/AboutUs/NEWSEVENTS/NewsEvents";
import Manufacture from "./Components/AboutUs/MANUFACTURING/Manufacture";
import Engg from "./Components/AboutUs/ENGINEERING/Engg";
import WhyRuqMain from "./Components/AboutUs/FAQ/WhyRuqMain";
import ManagementTeam from "./Components/AboutUs/MANAGEMENT/ManagementTeam";
import QualityStd from "./Components/AboutUs/QUALITY-STD/QualityStd";
import CompanyOverView from "./Components/AboutUs/COMPANY-OV/CompanyOverView";
import ContactMain from "./Components/ContactUs/ContactMain";
import LogInUp from "./Components/LoginPages/LogInUp";
// SERVICES NAVIGATE
import DesignServices from "./Components/Services/DesignServices/DesignServices";
import Mechanical from "./Components/Services/DesignServices/Mechanical/Mechanical";
import Manufacturing from "./Components/Services/Manufacturing/Manufacturing";
import PcbAssembly from "./Components/Services/PCB Assembly/PcbAssembly";
import CableAssembly from "./Components/Services/Cable Assemble/CableAssembly";
import SystemIntegration from "./Components/Services/SystemIntegration/SystemIntegration";

// PRODUCTS NAVIGATE

import PowerSupplyUnit from "./Components/Products/PowerSupplyUnit/PowerSupplyUnit";
import BackPlane from "./Components/Products/BackPlanePG/BackPlane";
import RadarComputer from "./Components/Products/RadarComputer&ATR/RadarComputer";
import RugDisplaySolution from "./Components/Products/RuggedDisplaySolutions/RugDisplaySolution";
import Dual from "./Components/Products/DualMoniterConsole/Dual";
import ServerWorkstation from "./Components/Products/ServerWorkstation/ServerWorkstation";
import Workstation from "./Components/Products/ServerWorkstation/Workstation";
import RugPC from "./Components/Products/RuggedPC/RugPC";
import PanelPc from "./Components/Products/RuggedDisplaySolutions/RDSSub/PanelPc";
import RugLoptop from "./Components/Products/RuggedPC/SubRugPro/RugLoptop";
import RugTablets from "./Components/Products/RuggedPC/SubRugPro/RugTablets";
import BoxPc from "./Components/Products/RuggedPC/SubRugPro/BoxPc";
import CustomPSU from "./Components/Products/PowerSupplyUnit/SubPUSPage/CustomPSU";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <-----------ABOUTUS PAGES ---------->  */}
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/manufacturing" element={<Manufacture />} />
          <Route path="/engineering" element={<Engg />} />
          <Route path="/whyfaq" element={<WhyRuqMain />} />
          <Route path="/management" element={<ManagementTeam />} />
          <Route path="/qualitystd" element={<QualityStd />} />
          <Route path="/companyoverview" element={<CompanyOverView />} />
          <Route path="/contactus" element={<ContactMain />} />

          {/* <-----------PRODUCT PAGES ---------->  */}

          <Route path="/power-supply-unit" element={<PowerSupplyUnit />} />
          <Route path="/backplane" element={<BackPlane />} />
          <Route path="/customPSU" element={<CustomPSU />} />
          <Route path="/radar-computer" element={<RadarComputer />} />
          <Route path="/rug-display-solutions" element={<RugDisplaySolution />} />
          <Route path="/dual-monitor-console" element={<Dual />} />
          <Route path="/servers-workstations" element={<ServerWorkstation />} />
          <Route path="/rug-pc" element={<RugPC />} />
          <Route path="/panel-pc" element={<PanelPc />} />
          <Route path="/work-station" element={<Workstation />} />
          <Route path="/laptop" element={<RugLoptop />} />
          <Route path="/tablet" element={<RugTablets />} />
          <Route path="/box" element={<BoxPc />} />

          {/* <-----------LIGIN PAGES ---------->  */}

          <Route path="/loginup" element={<LogInUp />} />

          {/* <-----------SERVICES PAGES ---------->  */}

          <Route path="/designservices" element={<DesignServices />} />
          <Route path="/designservices/mechanical" element={<Mechanical />} />
          <Route path="/manufacuring-services" element={<Manufacturing />} />
          <Route path="/pcb-assembly" element={<PcbAssembly />} />
          <Route path="/cable-assembly" element={<CableAssembly />} />
          <Route path="/system-integration" element={<SystemIntegration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
