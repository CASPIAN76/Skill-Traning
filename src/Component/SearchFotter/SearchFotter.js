import  React from "react";


const SearchFotter =()=>{

    return(
        <>
         <footer>
            {/* <!-- FOOTER WIDGET AREA --> */}
            <section className="section-content-block footer-widget-area-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-widget-area wish-newsletter-footer">	
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <h3>Newsletter</h3>
                                        <p>Signup for regular newsletter and stay upto date</p>
                                    </div>           

                                    <div className="col-md-6 col-sm-6">
                                        <form id="mc-form" className="mc-form fix" action="#">
                                            <div className="newsletter-form">
                                                <input id="mc-email" name="EMAIL" placeholder="Email Address..." type="email" />
                                                <button id="mc-submit" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                        <div className="mailchimp-alerts text-centre fix">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
                                        </div>
                                    </div> 
                                    {/* <!-- end .col-md-3  --> */}
                                </div>
                            </div> 
                            {/* <!-- end .footer-widget-area  --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-widget-area">
                                <div className="footer-logo" >
                                    <img src="../images/logo-footer.png" alt="Logo" width="205" />
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
                            {/* <!-- end .footer-widget-area  --> */}
                        </div> 
                        {/* <!-- end .col-md-4  -->		 */}
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
                            {/* <!-- end .footer-widget-area  --> */}
                        </div> 
                        {/* <!-- end .col-md-2  --> */}
                        <div className="col-md-4 col-sm-5">
                            <div className="footer-widget-area">
                                <h3>Organaization Info</h3>
                                <div className="contact-info divider-line">
                                    <div className="contact-heading"><i className="fa fa-location-arrow"></i></div>
                                    <div className="contact-details">
                                        965 East Avenu, Sector 9 Russel Squire, EB461 UK
                                    </div>
                                </div>
                                <div className="contact-info divider-line">
                                    <div className="contact-heading"><i className="fa fa-phone"></i></div>
                                    <div className="contact-details">
                                        (+1)755-650-5212
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-heading"><i className="fa fa-envelope-o"></i></div>
                                    <div className="contact-details color-primary">
                                        <a href="mailto:info@codeecstasy.com">info@codeecstasy.com</a>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- end .footer-widget-area  --> */}
                        </div> 
                        {/* <!-- end .col-md-3  -->   */}
                    </div> 
                    {/* <!-- end .row  -->                      */}
                </div> 
                {/* <!-- end .container  --> */}
            </section> 
            {/* <!--  end .footer-widget-area-bg --> */}

            {/* <!--FOOTER CONTENT  --> */}

            <section className="footer-section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 col-sm-12">
                            <div className="footer-nav">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Causes</a>
                                        </li>
                                        <li>
                                            <a href="#">Events</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> 	
                        <div className="col-md-12 col-sm-12">
                            <span>
                                Copyright © 2016. All right reserved by
                                <a className="color-primary" href="http://codeecstasy.com">codeecstasy.com</a>
                            </span>
                        </div> 					
                    </div> 
                </div> 
            </section>  
        </footer> 
        </>
    )
}
export default SearchFotter