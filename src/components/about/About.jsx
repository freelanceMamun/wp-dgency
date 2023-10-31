import '../../styles/about.css';
import '../../styles/responsive.css';
import AboutImg from '../../assets/images/Rectangle 634.png';
import AboutImg1 from '../../assets/images/Rectangle 632.png';

const About = () => {
  return (
    <section className="" id="about_main_pages">
      <div className="row" id="about_onesect_container">
        <div className="col-lg-6">
          <div className="about_part_one_containes">
            <img src={AboutImg1} alt="" />

            <div className="about_pert_one-content">
              <p>
                Lorem Ipsum has been the standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>

              <h4>
                <span>Carli Rabil.</span>
                CTO &amp; FOUNDER, MHM
              </h4>
              <div className="text-center pt-3">
                <img className="founder-of-sine" src={AboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about_right_content_inn">
            <div className="aboutright_heading-content">
              <h3>
                We Are Creative Agency That Creates
                <span> Beautiful </span>
              </h3>
              <p className="about_sub_disc">
                Lorem Ipsum has been the standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages,
              </p>
            </div>
            <div className="row about_counter_sect">
              <div className=" col-sm-4 col-4">
                <div className="about_Res_main_count">
                  <div className="count_er">
                    <p>
                      <span className="counter" data-count="90">
                        90
                      </span>
                      <span>%</span>
                    </p>
                  </div>
                  <div className="about_res_count_title">
                    <h5>IDEA &amp; RESEARCH</h5>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="about_Res_main_count">
                  <div className="count_er">
                    <p>
                      <span className="counter" data-count="50">
                        50
                      </span>
                      <span>%</span>
                    </p>
                  </div>
                  <div className="about_res_count_title">
                    <h5>WIREFRAME &amp; DESIGN</h5>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="about_Res_main_count">
                  <div className="count_er">
                    <p>
                      <span className="counter" data-count="85">
                        85
                      </span>
                      <span>%</span>
                    </p>
                  </div>
                  <div className="about_res_count_title">
                    <h5>DEVELOPING &amp; LAUNCH</h5>
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

export default About;
