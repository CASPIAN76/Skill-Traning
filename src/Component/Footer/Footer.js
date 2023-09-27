
import React from "react"



const Footer =()=>{

    return(
        <>
        
        
        
        <footer>
            {/* <!-- FOOTER WIDGET AREA --> */}
            <section className="section-content-block footer-widget-area-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-widget-area">
                                <div className="footer-logo" >
                                    <img src="../images/Mahadev_skill_logo-removebg-preview.png" alt="Logo" width="205" />
                                </div>
                                <div className="contact-info divider-line">
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas amet vestibulum tortor quam feugiat vitae ultricies eget tempor sit  ante.</p>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-details">
                                        <div className="social-icons">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-pinterest-p"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-widget-area">
                                <h3>Quick Link</h3>     
                                <ul className="footer-useful-links">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa fa-long-arrow-right fa-footer"></i>
                                            Urgent Causes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa fa-long-arrow-right fa-footer"></i>
                                            Featured Causes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa fa-long-arrow-right fa-footer"></i>
                                            Recent Events
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-long-arrow-right fa-footer"></i>
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-long-arrow-right fa-footer"></i>
                                            Latest News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-long-arrow-right fa-footer"></i>
                                            Our Services
                                        </a>
                                    </li>
                                </ul>  

                            </div> 
                        </div> 
                        <div className="col-md-4 col-sm-5">
                            <div className="footer-widget-area">
                                <h3>Organaization Info</h3>
                                <div className="contact-info divider-line">
                                    <div className="contact-heading"><i className="fa fa-location-arrow"></i></div>
                                    <div className="contact-details">
                                        Boranada Industrial Area, Jodhpur, Rajasthan, India
                                    </div>
                                </div>
                                <div className="contact-info divider-line">
                                    <div className="contact-heading"><i className="fa fa-phone"></i></div>
                                    <div className="contact-details">
                                        (+91)9929-129-108
                                    </div>
                                </div>
                                <div className="contact-info divider-line">
                                    <div className="contact-heading"><i className="fa fa-envelope-o"></i></div>
                                    <div className="contact-details color-primary">
                                        <a href="mailto:info@mahadevskill.com">info@mahadevskill.com</a>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-heading"><i className="fa fa-globe"></i></div>
                                    <div className="contact-details color-primary">
                                        <a href="www.mahadevskill.com">www.mahadevskill.com</a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>                  
                </div> 
            </section> 

            {/* <!--FOOTER CONTENT  --> */}

            <section className="footer-section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 col-sm-12">
                            <div className="footer-nav">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="causes.html">Cources</a>
                                        </li>
                                        <li>
                                            <a href="teams.html">Our Teams</a>
                                        </li>
                                        <li>
                                            <a href="about-us.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> 

                        <div className="col-md-12 col-sm-12">
                            <span>
                                Copyright © 2023. All right reserved by
                                <a className="color-primary" href="http://mahadevskill.com">mahadevskill.com</a>
                            </span>
                        </div> 					
                    </div> 
                </div> 
            </section>  
        </footer> 

        
        
        </>
    )
}
export default Footer
