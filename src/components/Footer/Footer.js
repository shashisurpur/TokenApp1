import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">An enthusiastic engineering fresher who is a self-starter and capable to use technical skills
for the betterment of the organization. A master’s degree in Software Engineering has
enhanced my proficiency in developing web and Mobile applications and looking forward to
work in a competitive environment that enhances overall learning.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>skills</h6>
                        <ul className="footer-links">
                        
                       
                            <li>Java Script</li>
                            <li>React Js</li>
                            <li>Java</li>
                            <li>Android</li>
                        
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                        {/* <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li> */}
                        <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                target="_blank"
                                rel="noopener noreferrer"    
                            >shashisurpurv@gmail.com</a> </li>
                        </ul>
                    </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 Build and Designed by 
                    <Link to="#"> KIRSHU</Link>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                        {/*  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li> */}
                            <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
