

const  CourseHeader =()=>{

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
        </>
    )
}

export default CourseHeader