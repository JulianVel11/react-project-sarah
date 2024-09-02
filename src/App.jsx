// import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/Home.jsx";
import Blog from "../src/Blog.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
