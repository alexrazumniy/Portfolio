import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Projectpage from "./components/pages/Projectpage";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";
import ScrollToTop from "./components/utils/scrollToTop";

const App = () => {
  return (
    <div className="container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Projectpage />} />
          <Route path="/about_me" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
