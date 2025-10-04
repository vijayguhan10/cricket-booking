import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Initialrouter from "./router/Initialrouter";
import Footer from "./components/Footer";
import Navigation from "./components/Header";

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-poppins">
      <Navigation />
      <div className="pt-16 lg:pt-20 bg-black">
        <Initialrouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
