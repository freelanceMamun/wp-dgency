import Slider from 'react-slick';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

const Testimonials = () => {
  return (
    <section className="clinet_review">
      <div className="client_review_container">
        <div className="container">
          <div className="client_heading">
            <div className="heading_service">
              <p>Tetimonials</p>
            </div>
            <div className="services_minheading">
              <h1>
                Our Client<span> Say </span>
              </h1>
            </div>
          </div>

          <div className="client_testimonials">
            <div className="row mt-5 pt-4 Client_memberSlide">
              <Slider {...settings}>
                <div className="col-lg-3">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Rectangle 18 (1).png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Mason Campbell</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A fringilla at gravida justo, felis risus
                          ullamcorper augue tempus. Nam hac.
                        </p>
                      </div>
                      <div className="clinet_ratting">
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Rectangle 18 (2).png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Vanessa Laird</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A fringilla at gravida justo, felis risus
                          ullamcorper augue tempus. Nam hac.
                        </p>
                      </div>
                      <div className="clinet_ratting">
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Rectangle 19.png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Irea Evans</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A fringilla at gravida justo, felis risus
                          ullamcorper augue tempus. Nam hac.
                        </p>
                      </div>
                      <div className="clinet_ratting">
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Rectangle 18 (1).png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Mason Campbell</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A fringilla at gravida justo, felis risus
                          ullamcorper augue tempus. Nam hac.
                        </p>
                      </div>
                      <div className="clinet_ratting">
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="tema_member_container">
                    <div className="tem-member_content">
                      <div className="images">
                        <img src="assets/images/Rectangle 18 (1).png" alt="" />
                      </div>
                      <div className="member_content">
                        <h4>Vanessa Laird</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A fringilla at gravida justo, felis risus
                          ullamcorper augue tempus. Nam hac.
                        </p>
                      </div>
                      <div className="clinet_ratting">
                        <ul>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
