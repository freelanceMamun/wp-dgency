import '../../../styles/index.css';

import Slider from 'react-slick';
var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
      },
    },
  ],
};
const SliderP = ({ backgroundImage, dataMeet, headText }) => {
  return (
    <section className="in_client mt-5 pb-4">
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
                <span> {headText} </span>
              </h1>
            </div>
          </div>
          <div className="row mt-5 our_client">
            <Slider {...settings}>
              {dataMeet.map((item) => {
                return (
                  <div key={item.id} className="col-lg-2">
                    <div className="clinet_brand">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderP;
