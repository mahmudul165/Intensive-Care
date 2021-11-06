import "../Footer/Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo"></div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a to="#0">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#0">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#0">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#0">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a to="#0">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <a to="/patient/search-doctor">Search for Doctors</a>
                  </li>
                  <li>
                    <a to="/login">Login</a>
                  </li>
                  <li>
                    <a to="/register">Register</a>
                  </li>
                  <li>
                    <a to="/patient/booking">Booking</a>
                  </li>
                  <li>
                    <a to="/patient/dashboard">Patient Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <a to="/appointments">Appointments</a>
                  </li>
                  <li>
                    <a to="/chat-doctor">Chat</a>
                  </li>
                  <li>
                    <a to="/login">Login</a>
                  </li>
                  <li>
                    <a to="/doctor-register">Register</a>
                  </li>
                  <li>
                    <a to="/doctor-dashboard">Doctor Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <p>3556 Mugda Street, Dhaka-1205, Bangladesh</p>
                  </div>
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    +8801749160165
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    HealthCareBd@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    © 2021 Health Care Bd. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <a to="/terms">Terms and Conditions</a>
                    </li>
                    <li>
                      <a to="/privacy-policy">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
