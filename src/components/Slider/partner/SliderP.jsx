import '../../../styles/index.css';

import Slider from 'react-slick';
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const SliderP = ({ backgroundImage }) => {
  return (
    <section className="in_client">
      <div
        className="our_clientInner"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="container">
          <div className="client_heading">
            <div className="heading_service">
              <p>Clients</p>
            </div>
            <div
              className="services_minheading"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1>
                Meet Our <span> Belivers </span>
              </h1>
            </div>
          </div>
          <div className="row mt-5 our_client">
            <Slider {...settings}>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/FPmZo.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/MGV5G.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/WKuV6.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/FPmZo.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/MGV5G.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="clinet_brand">
                  <img src="assets/images/WKuV6.png" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderP;
