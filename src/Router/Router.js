import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Component/Header/Header";
const Routers=()=>{
    return(
        <Router>
         
         <Header />
         {/* Header */}
          <Routes>
            <Route path='/' exact element={<Home />}  />
            
            
          </Routes>

          {/* footer */}
         </Router>
    )
}

export default Routers