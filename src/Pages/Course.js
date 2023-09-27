
import React from "react";
import SearchFotter from "../Component/SearchFotter/SearchFotter";
import Content from "../Component/Course-Content/Content";
import CourseHeader from "../Component/CoursesHeader.js/CourseHeader";


const Course =()=>{

return(
    <>
     <CourseHeader />
   
        {/* <!-- end main-header  --> */}

        {/* <!--  PAGE HEADING --> */}

        <Content />
        {/* <!-- end .cause-section-1  --> */}

        {/* <!-- FOOTER  --> */}

        <SearchFotter />

        {/* <!-- Back To Top Button  --> */}

        <a id="backTop">Back To Top</a> 
    
    </>
)
}

export default Course