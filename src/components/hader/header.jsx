import '../../styles/common.css';
import '../../styles/responsive.css';

const Header = () => {
  return (
    <header>
      <div className="nav_inner_desk">
        <div className="container">
          <div className="nav_main_container p-2">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand brand-logos " href="#">
                  <h2 className="text-white mb-0">Wp-Dgency</h2>
                </a>
                <button
                  className="navbar-toggler toggleBtnNav text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse nav_toggleContent"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto ms-4 mb-lg-0 gap-2">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about_main_pages">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown Slected-menu">
                      <a className="nav-link sele-btn" href="#">
                        Services{' '}
                        <i className="fa-solid fa-chevron-down ms-2"></i>
                      </a>
                      <ul className="dropdown-menus">
                        <li>
                          <a className="dropdown-item" href="#services">
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#services">
                            Web Development
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#services">
                            Mobile App Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#services">
                            Desktop app Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#services">
                            3D Design
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#services">
                            2D Design
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#services">
                            UI/UX Design
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="project.html" className="nav-link">
                        Project
                      </a>
                    </li>
                    <li className="nav-item dropdown more-menu">
                      <a className="nav-link moresele-btn" href="#">
                        More <i className="fa-solid fa-plus"></i>
                      </a>
                      <ul className="Moredropdown-menus">
                        <li>
                          <a className="dropdown-item" href="#about_main_pages">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#indContact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="d-flex gap-4 align-items-center me-4 user_Trigger_Btn">
                    <div className="user_authSign">
                      <a href="Login.html">
                        <button className="btn login_btn" type="submit">
                          Log In
                        </button>
                      </a>
                      <a href="Register.html">
                        <button className="btn sign_btn" type="submit">
                          Register
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
