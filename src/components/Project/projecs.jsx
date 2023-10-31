import { servicesData } from '../../db/db';
import { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
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

const Project = () => {
  const [project, setproject] = useState(servicesData);

  const filterFun = (value) => {
    console.log(value);
    const filterData = servicesData.filter((item) => {
      return item.catagoriesName === value;
    });
    setproject(filterData);
    console.log(filterData);
  };

  return (
    <div id="project">
      <section className="in_catagoiresInner">
        <div className="ind_catagories_container">
          <div className="container">
            <div className="Catagoiresclient_heading">
              <div className="heading_service">
                <p>Our Project</p>
              </div>
              <div className="services_minheading">
                <h1>
                  Find The Category <span> For You </span>
                </h1>
              </div>
            </div>

            <div className="Inde_Catagoires_inner">
              <ul className="ps-0 ms-0 mb-3">
                <Slider {...settings}>
                  {servicesData.map((item) => {
                    return (
                      <li key={item.id} className="nav-item">
                        <button
                          onClick={() => filterFun(item.catagoriesName)}
                          className="nav-link"
                        >
                          {item.catagoriesName}
                        </button>
                      </li>
                    );
                  })}
                </Slider>
              </ul>
              <div className="tab-content">
                <div className="">
                  <div className="catagories_projectInner">
                    <div className="row ms-1 me-1">
                      {project
                        .map((item) => {
                          return (
                            <div key={item.id} className="col-lg-4 col-md-4">
                              <div className="Catagoires_card">
                                <img src={item.serviceimg} alt="" />
                                <div className="in_catagories_content">
                                  <p className="titleName">
                                    {item.servicename}
                                  </p>
                                  <p className="catagories_subTitle">
                                    Lorem Ipsum has been the industrys standard
                                    dummy text em Ipsum has been the industrys
                                    standard dummy tex
                                  </p>
                                  <a href="project.html">Read more</a>
                                </div>
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 6)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
