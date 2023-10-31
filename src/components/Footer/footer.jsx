import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="footer_title">
                <div className="brand-logos">
                  {/* <img
                    src="assets/images/MHM (1).png"
                    className="mb-3"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_title">
                <h4>Expertises</h4>
                <ul>
                  <li>
                    <Link to={'/'}> Design Thinking </Link>
                  </li>
                  <li>
                    <Link to={'/'}> UX Design </Link>
                  </li>
                  <li>
                    <a href="#">Product Design </a>
                  </li>
                  <li>
                    <a href="#">Developpement Webflow</a>
                  </li>
                  <li>
                    <a href="#">Developpement Shopify </a>
                  </li>
                  <li>
                    <a href="#">Developpement Shopify </a>
                  </li>
                  <li>
                    <a href="#">Referencement SEO </a>
                  </li>
                  <li>
                    <a href="#">Referencement SEA </a>
                  </li>
                  <li>
                    <a href="#">Reseaux sociaux</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_title">
                <h4>Solutions</h4>
                <ul>
                  <li>
                    <a href="#"> Design Thinking </a>
                  </li>
                  <li>
                    <a href="#"> UX Design </a>
                  </li>
                  <li>
                    <a href="#">Product Design </a>
                  </li>
                  <li>
                    <a href="#">Developpement Webflow</a>
                  </li>
                  <li>
                    <a href="#">Developpement Shopify </a>
                  </li>
                  <li>
                    <a href="#">Developpement Shopify </a>
                  </li>
                  <li>
                    <a href="#">Referencement SEO </a>
                  </li>
                  <li>
                    <a href="#">Referencement SEA </a>
                  </li>
                  <li>
                    <a href="#">Reseaux sociaux</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_title">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#"> Miro Academy</a>
                  </li>
                  <li>
                    <a href="#"> Help Center </a>
                  </li>
                  <li>
                    <a href="#">Blog </a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                  <li>
                    <a href="#">Miro Community</a>
                  </li>
                  <li>
                    <a href="#">Miro Professional Network</a>
                  </li>
                  <li>
                    <a href="#">Referencement SEO </a>
                  </li>
                  <li>
                    <a href="#">Miro Experts Directory </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_title">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#"> About us </a>
                  </li>
                  <li>
                    <a href="#"> Careers 🚀 </a>
                  </li>
                  <li>
                    <a href="#">Miro in the News </a>
                  </li>
                  <li>
                    <a href="#">Customer Stories</a>
                  </li>

                  <li>
                    <a href="#">Reseaux sociaux</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer_title">
                <h4>Plans and Pricing</h4>
                <ul>
                  <li>
                    <a href="#">Pricing </a>
                  </li>
                  <li>
                    <a href="#">Enterprise </a>
                  </li>
                  <li>
                    <a href="#">Consultants </a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <a href="#">NPOs </a>
                  </li>
                  <li>
                    <a href="#"> Contact sales </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app_auth">
            <div className="">
              <a href="#">
                <img src="assets/images/Frame.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/images/Frame (1).png" alt="" />
              </a>
            </div>
            <div className="copyRight">
              <p>© 2022 MHM, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="footerBttom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ul className="socila_media">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="language_selected">
                      <i className="fa-solid fa-globe"></i>
                      <div className="select_language">
                        <span className="ms-1">EN</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="right_contents">
                  <div className="copyRight">
                    <p>© 2022 Miro</p>
                  </div>
                  <ul className="trams">
                    <li>
                      <a href="#"> Terms of Service </a>
                    </li>
                    <li>
                      <a href="#"> Privacy Policy </a>
                    </li>
                    <li>
                      <a href="#"> Manage Cookies </a>
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
