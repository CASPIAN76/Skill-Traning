
import React from "react";


const Course =()=>{

return(
    <>
    
    <header className="main-header clearfix">
            <div className="top-bar">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <span className="top-phone-no">
                                <i className="fa fa-phone-square"></i> 
                                +093-120-525-9162
                            </span>
                            <span className="top-email-info">
                                <i className="fa fa-paper-plane"></i>
                                <a href="#">info@example.com</a>
                            </span>
                        </div>
                         {/* <!-- end col-sm-6  --> */}
                        <div className="col-md-6 col-sm-12 text-right hidden-xs top-donation-btn-container">
                            <a href="#" title="Donate Now" className="btn top-donate-btn" >Donate Now</a>
                            <a href="#" title="Join Now" className="btn top-join-btn" >Join Us Now</a>
                        </div> 
                        {/* <!-- end col-sm-6  --> */}
                    </div> 
                    {/* <!-- end .row  --> */}
                </div> 
                {/* <!--  end .container --> */}
            </div>
            {/* <!--  end .top-bar  --> */}
            <section className="header-wrapper navgiation-wrapper">
                <div className="navbar navbar-default">			
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="logo" href="index.html"><img alt="" src="images/logo.png" /></a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="drop">
                                    <a href="index.html" title="Home Layout 01">Home</a>
                                    <ul className="drop-down">
                                        <li><a href="index.html" title="Home Layout 01">Home Layout 1</a></li>
                                        <li><a href="home-2.html" title="Home Layout 02">Home Layout 2</a></li>
                                    </ul>
                                </li>
                                <li className="drop"><a href="#">Pages</a>
                                    <ul className="drop-down">
                                        <li><a href="about-us.html" title="About Us">About Us</a></li>
                                        <li><a href="service.html" title="Services">Services</a></li>
                                        <li className="drop"><a href="#">Gallery</a>
                                            <ul className="drop-down level3">
                                                <li><a href="gallery-1.html">Layout 01</a></li> 
                                                <li><a href="gallery-2.html">Layout 02</a></li> 
                                                <li><a href="gallery-3.html">Layout 03</a></li> 
                                            </ul>
                                        </li>
                                        <li><a href="donation.html" title="Donation">Donation</a></li> 
                                        <li><a href="404.html" title="404 Page">404 Page</a></li> 
                                        <li className="drop"><a href="#">Level 3</a>
                                            <ul className="drop-down level3">
                                                <li><a href="#">Level 3.1</a></li>
                                                <li><a href="#">Level 3.2</a></li>
                                                <li><a href="#">Level 3.3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> 
                                <li>
                                    <a href="#">Causes</a>
                                    <ul className="drop-down">
                                        <li><a href="causes.html">All Causes</a></li>
                                        <li><a href="cause-single.html">Single Cause</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                    <ul className="drop-down">
                                        <li><a href="events.html">All Events</a></li>
                                        <li><a href="event-single.html">Single Event</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                    <ul className="drop-down">
                                        <li><a href="blog.html">All Posts</a></li> 
                                        <li><a href="single.html">Single Page</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </section>
        </header> 
        {/* <!-- end main-header  --> */}

        {/* <!--  PAGE HEADING --> */}

        <section className="page-header" data-stellar-background-ratio="0.1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h3>
                            Causes Lists
                        </h3>
                        <p className="page-breadcrumb">
                            <a href="#">Home</a> / All Causes
                        </p>
                    </div>
                </div> 
                {/* <!-- end .row  --> */}
            </div> 
            {/* <!-- end .container  --> */}
        </section>
        {/* <!-- end .page-header  --> */}

        {/* <!--  MAIN CONTENT  --> */}

        {/* <!--  CAUSE SECTION  --> */}

        <section className="section-content-block section-secondary-bg">
            <div className="container wow fadeInUp">
                <div className="row"> 
                    <div className="col-md-6 col-sm-6">
                        <div className="cause-wrapper xs-margin">
                            <div className="col-sm-12 no-padding">
                                <figure className="cause-img">
                                    <img src="images/cause_1.jpg" alt="Cause" />
                                </figure> 
                                {/* <!-- end .cause-img  --> */}
                            </div>
                             {/* <!-- end .col-sm-4  --> */}
                            <div className="col-sm-12 no-padding">
                                <div className="cause-content">
                                    <div className="cause-text">
                                        <h5><a href="#">Business with Training</a></h5>
                                        <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                    </div> 
                                    {/* <!--  end .cause-text  --> */}
                                </div> 
                                {/* <!-- end .cause-content  --> */}
                            </div>
                             {/* <!-- end .col-sm-8  --> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="cause-wrapper xs-margin">
                            <div className="col-sm-12 no-padding">
                                <figure className="cause-img">
                                    <img src="images/cause_2.jpg" alt="Cause" />
                                </figure>
                                 {/* <!-- end .cause-img  --> */}
                            </div>
                             {/* <!-- end .col-sm-4  --> */}
                            <div className="col-sm-12 no-padding">
                                <div className="cause-content">
                                    <div className="cause-text">
                                        <h5><a href="#">Investment in Business</a></h5>
                                        <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                    </div> 
                                    {/* <!--  end .cause-text  --> */}
                                </div> 
                                {/* <!-- end .cause-content  --> */}
                            </div> 
                            {/* <!-- end .col-sm-8  --> */}
                        </div>
                    </div>					
                </div>
                 {/* <!-- end .row  --> */}
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="cause-wrapper xs-margin">
                            <div className="col-sm-12 no-padding">
                                <figure className="cause-img">
                                    <img src="images/cause_2.jpg" alt="Cause" />
                                </figure> 
                                {/* <!-- end .cause-img  --> */}
                            </div>
                             {/* <!-- end .col-sm-4  --> */}
                            <div className="col-sm-12 no-padding">
                                <div className="cause-content">
                                    <div className="cause-text">
                                        <h5><a href="#">Industrial Training</a></h5>
                                        <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                    </div> 
                                    {/* <!--  end .cause-text  --> */}
                                </div>
                                 {/* <!-- end .cause-content  --> */}
                            </div> 
                            {/* <!-- end .col-sm-8  --> */}
                        </div>	
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="cause-wrapper xs-margin">
                            <div className="col-sm-12 no-padding">
                                <figure className="cause-img">
                                    <img src="images/cause_1.jpg" alt="Cause" />
                                </figure>
                                 {/* <!-- end .cause-img  --> */}
                            </div> 
                            {/* <!-- end .col-sm-4  --> */}
                            <div className="col-sm-12 no-padding">
                                <div className="cause-content">
                                    <div className="cause-text">
                                        <h5><a href="#">Fundraising For Hungry People</a></h5>
                                        <p>Pellentesque habitant dolor ipsum Quisque imperdiet imperdiet.Emit venenatis quam pulvinar porta sem dolor sed emitvoltam</p>
                                    </div> 
                                    {/* <!--  end .cause-text  --> */}
                                </div>
                                 {/* <!-- end .cause-content  --> */}
                            </div> 
                            {/* <!-- end .col-sm-8  --> */}
                        </div>	
                    </div>					
                </div> 
                {/* <!-- end .row  --> */}
            </div>
             {/* <!-- end .container  --> */}
        </section> 
        {/* <!-- end .cause-section-1  --> */}

        {/* <!-- FOOTER  --> */}

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

        {/* <!-- Back To Top Button  --> */}

        <a id="backTop">Back To Top</a> 
    
    </>
)
}

export default Course