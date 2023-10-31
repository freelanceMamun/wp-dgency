import Slider from 'react-slick';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Team = ({ TeamMemberData }) => {
  return (
    <section className="Team_member">
      <div className="ind_team_member pt-3 pb-3">
        <div className="container">
          <div className="client_heading">
            <div className="heading_service">
              <p>Our Team</p>
            </div>
            <div className="services_minheading">
              <h1>
                Meet The Team <span> Team </span>
              </h1>
            </div>
          </div>
          <div className="tema_member_inner">
            <div className="row mt-5 pt-4 team_memberSlide">
              <Slider {...settings}>
                {TeamMemberData.map((item) => {
                  return (
                    <div key={item.id} className="col-lg-4">
                      <div className="tema_member_container">
                        <div className="tem-member_content">
                          <div className="images">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="member_content">
                            <h4>Mason Campbell</h4>
                            <p>UI DESIGNER</p>
                          </div>
                        </div>
                        <div className="taem_social">
                          <div className="social_media">
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                          <div className="social_media">
                            <a href="#">
                              <i className="fa-brands fa-square-facebook"></i>
                            </a>
                          </div>
                          <div className="social_media">
                            <a href="#">
                              <i className="fa-brands fa-dribbble"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-lg-4">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Mask.png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Vanessa Laird</h4>
                        <p>UI DESIGNER</p>
                      </div>
                    </div>
                    <div className="taem_social">
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-square-facebook"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Userpic.png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Irea Evans</h4>
                        <p>Client Manager</p>
                      </div>
                    </div>
                    <div className="taem_social">
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-square-facebook"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Mask (1).png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Mason Campbell</h4>
                        <p>UI DESIGNER</p>
                      </div>
                    </div>
                    <div className="taem_social">
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-square-facebook"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Mask.png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Vanessa Laird</h4>
                        <p>UI DESIGNER</p>
                      </div>
                    </div>
                    <div className="taem_social">
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-square-facebook"></i>
                        </a>
                      </div>
                      <div className="social_media">
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="project_row_container">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <div className="row">
                    <div className="col-4">
                      <div className="Completed_project">
                        <div className="Completed_project_count">
                          <h4>50+</h4>
                          <p>engineers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="Completed_project">
                        <div className="Completed_project_count">
                          <h4>250+</h4>
                          <p>engineers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="Completed_project">
                        <div className="Completed_project_count">
                          <h4>200+</h4>
                          <p>Project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-5">
                  <div className="company_lance">
                    <div className="client_heading">
                      <div className="services_minheading" data-aos="fade-up">
                        <h1>
                          Company <br />
                          At a <span> Glance </span>
                        </h1>
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
  );
};

export default Team;
