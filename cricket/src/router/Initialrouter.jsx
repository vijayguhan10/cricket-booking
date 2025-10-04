import React from "react";
import RenderHome from "../components/RenderHome";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import CommonID from "../components/CommonID";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import onlineBookingData from "../data/OnlineBookingId.json";
import onlincricketData from "../data/OnlineCricketId.json";
import Iplbetting from "../data/IplbettingID.json";

const Initialrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderHome />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/onlinebooking"
        element={<CommonID data={onlineBookingData} />}
      />
      <Route
        path="/onlincricketbooking"
        element={<CommonID data={onlincricketData} />}
      />
      <Route path="/iplbetting" element={<CommonID data={Iplbetting} />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default Initialrouter;
