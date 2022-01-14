import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;
