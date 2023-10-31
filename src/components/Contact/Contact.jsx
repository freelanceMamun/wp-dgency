import bgimg from '../../assets/images/Mask group.png';
const Contact = () => {
  return (
    <section className="indContact" id="indContact">
      <div className="contact_inner pb-3">
        <div className="container">
          <div className="responsive_contact-heading">
            <div className="client_heading mb-3">
              <div className="heading_service">
                <p>Get Consultation</p>
              </div>
              <div className="services_minheading">
                <h1>
                  Contact<span>Us</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row contact_rows">
            <div className="col-lg-6 col-md-6">
              <div className="client_heading mb-3">
                <div className="heading_service">
                  <p>Get Consultation</p>
                </div>
                <div className="services_minheading">
                  <h1>
                    Contact<span>Us</span>
                  </h1>
                </div>
              </div>
              <div className="contactForm">
                <form className="row">
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      placeholder="Send your message"
                      id="floatingTextarea2"
                      name=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="contact_right_content"
                style={{ backgroundImage: `url('${bgimg}')` }}
              >
                <div className="right_content">
                  <div className="d-flex">
                    <h3>Go further with the MHM</h3>
                    <img src="assets/images/image 1.png" alt="" />
                  </div>
                  <p>
                    Save even more - Get up to 25% on select Projects and earn
                    double the points when you get on the app.
                  </p>
                  <p>
                    Scan the QR code with your device camera and download our
                    app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
