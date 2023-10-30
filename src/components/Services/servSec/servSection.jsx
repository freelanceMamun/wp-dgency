import React from "react";

const servSection = () => {
  return (
    <section className="our_services">
      <div className="in_project_services">
        <div className="inproject_achieve">
          <div className="row">
            {/* =========   Achievent Counter inner section  */}
            {happyClient.map((clinet) => {
              return (
                <div key={clinet.id} className="col-lg-3   col-3 responsive_pd">
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
  );
};

export default servSection;
