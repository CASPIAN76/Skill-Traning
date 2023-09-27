import  React from "react";




const Header = ()=>{
return(
    <>

    
<header className="main-header clearfix">
            <div className="top-bar ">
                <div className="container " >
                    <div className="row clearfix">
                      
                        <div className="col-md-12 col-sm-12 text-end d-md-block  top-donation-btn-container">
                            <span className="top-phone-no">
                                <i className="fa fa-phone-square"></i> 
                                +91-9929-129-108
                            </span>
                            <span className="top-email-info">
                                <i className="fa fa-paper-plane"></i>
                                <a href="mailto:info@mahadevskill.com">info@mahadevskill.com</a>
                            </span>
                        </div> 
                     
                    </div> 
               
                </div> 
             
            </div> 
            {/* <!--  end .top-bar  --> */}
           
        </header> 
        {/* <!-- end main-header  --> */}

    
    
    
    </>
)




}


export default Header