import React from "react";
import RenderHome from "../components/RenderHome";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import CommonID from "../components/CommonID";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";

const Initialrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RenderHome />} />
      <Route path="/about" element={<About />} />
      {/* Removed ID pages routes per request */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default Initialrouter;
