import "../../styles/index.css";
import img1 from "../../assets/images/Rectangle 4.png";
import Img32 from "../../assets/images/Rectangle 728.png";

import CountUp from "react-countup";
import MoreIcon from "../../assets/images/Learn More icon.png";
import { happyClient, servicesData } from "../../db/db";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  // ===== Show Services initial State =
  const [show, setShow] = useState(6);
  // =======  fade animation custom state
  const [isVisible, setVisible] = useState(true);
  // ============  Services Other Show Function ==========
  const setShowFun = () => {
    setShow((prev) => {
      return prev + 6;
    });
  };

  // =======  fade animation custom function

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={` index-pages`} id="index_pages">
      <section className="ind_hero_area">
        <div className="banner_container">
          <div
            className="bg-gracolor"
            style={{ backgroundImage: `url('${img1}')` }}
          >
            <div className="container">
              <div className="banner_content">
                <div className="row">
                  <div className="col-lg-7" style={{ zIndex: 9 }}>
                    <div className="banner_mainContent">
                      <h1 className="animate__animated animate__fadeInLeft  ">
                        Creative &{" "}
                        <span className="bg_gradient"> Minimal </span>
                        <span className="bg_stok"> IT Agency </span>
                      </h1>
                      <div className="shot_dis animate__animated animate__fadeInUp">
                        <p>
                          Lorem Ipsum has been the industrys standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularise
                        </p>
                      </div>
                      <div className="get_dBtn mt-4 mb-4">
                        <div className="get_btn">
                          <a href="#" className="startedbtn">
                            Get Started
                          </a>
                        </div>
                        <div className="get_btn">
                          <a href="#" className="learnMoreBtn">
                            <img src={MoreIcon} alt="" />
                            <span className="ms-3"> Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Components ======  */}

      <section className="our_services">
        <div className="in_project_services">
          <div className="inproject_achieve">
            <div className="row">
              {/* =========   Achievent Counter inner section  */}
              {happyClient.map((clinet) => {
                return (
                  <div
                    key={clinet.id}
                    className="col-lg-3   col-3 responsive_pd"
                  >
                    <div className="project_services Achieve">
                      <div className="Services_images">
                        <img src={clinet.img} alt="" />
                      </div>
                      <div className="pro_count">
                        <CountUp start={0} duration="5" end={clinet.timer}>
                          {({ countUpRef }) => {
                            return (
                              <div>
                                <h3>
                                  <span ref={countUpRef}></span>
                                  <span>+</span>
                                </h3>
                              </div>
                            );
                          }}
                        </CountUp>

                        <p>{clinet.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* =========   Achievent Counter inner section  */}
            </div>
          </div>
        </div>

        <div className="our_services_container">
          <div className="container">
            <div className="Services_heading">
              <div className="heading_service">
                <p>What we do</p>
              </div>
              <div className="services_minheading">
                <h1>
                  Our <span> Service </span>
                </h1>
              </div>
            </div>
            <div className="row mt-5 pt-3">
              {servicesData
                .map((item) => {
                  return (
                    <div
                      key={item.id}
                      ref={domRef}
                      className={`fade-in-section ${
                        isVisible ? "is-visible" : ""
                      } col-lg-4 col-md-4 card-content`}
                    >
                      <div className="services_cardInner">
                        <div className="services-img">
                          <img src={item.serviceimg} alt="" />
                        </div>
                        <a href="services.html">
                          <div className="card_contaent">
                            <img src={Img32} alt="uimf" />
                            <h4>{item.catagoriesName}</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })
                .slice(0, show)}
              {/* <div className="col-=lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*-cmyVmnSPdABWBxLhaPr9Q.jpeg" alt="" />
                 
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src={Img32} alt="uimf" />
                      <h4>WEB DESIGN</h4>
                    </div>
                  </a>
                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="assets/images/Rectangle 725.png" alt="" />
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src="assets/images/Rectangle 728 (1).png" alt="" />
                      <h4>DEVELOPING</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="assets/images/Rectangle 727.png" alt="" />
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src="assets/images/Rectangle 728 (3).png" alt="" />
                      <h4>VIDEO EDITING</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="assets/images/Rectangle 700.png" alt="" />
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src="assets/images/Rectangle 728 (5).png" alt="" />
                      <h4>UI/UX DESIGN</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="assets/images/Rectangle 701.png" alt="" />
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src="assets/images/Rectangle 728 (4).png" alt="" />
                      <h4>APP DESIGN</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 card-content">
                <div className="services_cardInner">
                  <div className="services-img">
                    <img src="assets/images/Rectangle 726.png" alt="" />
                  </div>
                  <a href="services.html">
                    <div className="card_contaent">
                      <img src="assets/images/Rectangle 728 (3).png" alt="" />
                      <h4>3D DESIGN</h4>
                    </div>
                  </a>
                </div>
              </div> */}

              <div className="col-12 mt-4 mb-4">
                <div className="viewMoreBtn">
                  <button id="loadMore" onClick={setShowFun}>
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Components End ======  */}
    </div>
  );
};

export default Home;
