import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/my-pro-files/home" />} />
          <Route path="/my-pro-files/home" element={<Home />} />
          <Route
            path="/my-pro-files"
            element={<Navigate to="/my-pro-files/home" />}
          />
          <Route path="/my-pro-files/projects" element={<Projects />} />
          <Route path="/my-pro-files/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
