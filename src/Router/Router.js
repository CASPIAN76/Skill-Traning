import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import AboutUs from "../Component/AboutUS/About-us";
import Course from "../Pages/Course";
const Routers=()=>{
    return(
        <Router>
         
         {/* <Header /> */}
         {/* Header */}
          <Routes>
            <Route path='/' exact element={<Home />}  />
            <Route path='/aboutUs' exact element={<AboutUs />}  />
            <Route path='/courses' exact element={<Course />}  />
            
            
          </Routes>
{/* 
         <Footer /> */}
         </Router>
    )
}

export default Routers