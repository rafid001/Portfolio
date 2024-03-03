import React from "react";
import Hero from "./components/Hero";
import './App.css'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Page from "./components/Page";
import Links from "./components/Links";
import Contact from "./components/Contact"
import Projectspage from "./components/Projectspage";


export default function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<Page/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projectspage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}