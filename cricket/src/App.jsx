import "./App.css";
import Initialrouter from "./router/Initialrouter";
import Footer from "./components/Footer";
import Navigation from "./components/Header";
function App() {
  return (
    <div className="font-poppins">
      <Navigation />
      <Initialrouter />
      <Footer />
    </div>
  );
}

export default App;
