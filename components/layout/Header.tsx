import Link from "next/link";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

const Header = () => {
  const [pinned, setPinned] = useState(true);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    });
  }, []);

  return (
    <header className="header-global" id="home">
      <Headroom onPin={() => setPinned(true)} onUnpin={() => setPinned(false)}>
        <nav
          id="navbar-main"
          aria-label="Primary navigation"
          className={`navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-theme-secondary headroom--not-bottom ${
            pinned ? "headroom--pinned" : "headroom--unpinned"
          } ${onTop ? "headroom--top" : "headroom--not-top"}`}
        >
          <div className="container position-relative">
            <Link className="navbar-brand mr-lg-4" href="/">
              <picture>
                <img
                  className="navbar-brand-dark"
                  src="/static/img/light.svg"
                  alt="Logo light"
                />
              </picture>
              <picture>
                <img
                  className="navbar-brand-light"
                  src="/static/img/dark.svg"
                  alt="Logo dark"
                />
              </picture>
            </Link>
            <div
              className="navbar-collapse collapse mr-auto"
              id="navbar_global"
            >
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <Link href="/">
                      <picture>
                        <img src="/static/img/dark.svg" alt="Logo dark" />
                      </picture>
                    </Link>
                  </div>
                  <div className="col-6 collapse-close">
                    <a
                      href="#navbar_global"
                      className="fas fa-times"
                      data-toggle="collapse"
                      data-target="#navbar_global"
                      aria-controls="navbar_global"
                      aria-expanded="false"
                      title="close"
                      aria-label="Toggle navigation"
                    ></a>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#faq" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#download" className="nav-link">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="https://themesberg.com/product/bootstrap/swipe-free-mobile-app-one-page-bootstrap-5-template"
                target="_blank"
                className="btn btn-outline-soft d-none d-md-inline mr-md-3 animate-up-2"
                rel="noreferrer"
              >
                Free download
              </a>
              <a
                href="https://themesberg.com/product/ui-kit/pixel-pro-premium-bootstrap-5-ui-kit"
                target="_blank"
                className="btn btn-md btn-tertiary text-white d-none d-md-inline animate-up-2"
                rel="noreferrer"
              >
                Upgrade to Pro<i className="fas fa-rocket ml-2"></i>
              </a>
              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </Headroom>
    </header>
  );
};

export default Header;
