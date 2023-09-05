import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import FicheLogement from "./pages/FicheLogement/Fichelogement";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
