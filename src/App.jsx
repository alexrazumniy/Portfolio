import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Projectpage from "./components/pages/Projectpage";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ContactMe from "./components/pages/ContactMe";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<Projectpage />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/contact_me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
