const Footer = () => {
  return (
    <footer className="footer py-5 pt-lg-6">
      <div className="sticky-left d-flex align-items-center bg-white p-3 pt-4 px-4 border border-soft shadow-sm rounded">
        <span className="mr-3 d-block font-small mb-1">Open source ❤️</span>
        <a
          className="github-button"
          href="https://github.com/themesberg/swipe-one-page-bootstrap-5-template"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star themesberg/swipe-one-page-bootstrap-5-template on GitHub"
        >
          Star
        </a>
      </div>
      <div className="sticky-right">
        <a
          href="#home"
          className="icon icon-primary icon-md btn btn-icon-only btn-white border border-soft shadow-soft animate-up-3"
        >
          <span className="fas fa-chevron-up"></span>
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <p>
              Swipe is a beautiful and free one page Bootstrap 5 Template
              created to showcase your awesome mobile app.
            </p>
            <ul className="social-buttons mb-5 mb-lg-0">
              <li>
                <a
                  href="https://twitter.com/themesberg"
                  aria-label="twitter social link"
                  className="icon icon-md icon-twitter mr-3"
                >
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/themesberg/"
                  className="icon icon-md icon-facebook mr-3"
                  aria-label="facebook social link"
                >
                  <span className="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/themesberg"
                  aria-label="github social link"
                  className="icon icon-md icon-github mr-3"
                >
                  <span className="fab fa-github"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/themesberg"
                  className="icon icon-md icon-dribbble"
                  aria-label="dribbble social link"
                >
                  <span className="fab fa-dribbble"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-5 mb-lg-0">
            <span className="h5">Themesberg</span>
            <ul className="footer-links mt-2">
              <li>
                <a
                  target="_blank"
                  href="https://themesberg.com/blog"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://themesberg.com/products"
                  rel="noreferrer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://themesberg.com/about"
                  rel="noreferrer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://themesberg.com/contact"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-lg-0">
            <span className="h5 mb-3 d-block">Subscribe</span>
            <form action="#">
              <div className="form-row mb-2">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="example@company.com"
                    name="email"
                    aria-label="Subscribe form"
                    required
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-dark shadow-soft btn-block"
                    data-loading-text="Sending"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
            <p className="text-muted font-small m-0">No spam. Pinky swear.</p>
          </div>
        </div>
        <hr className="bg-light my-2" />
        <div className="row pt-2 pt-lg-5">
          <div className="col mb-md-0">
            <a
              href="https://themesberg.com"
              target="_blank"
              className="d-flex justify-content-center"
              rel="noreferrer"
            >
              <picture>
                <img
                  src="/static/img/themesberg.svg"
                  height="25"
                  className="mb-3"
                  alt="Themesberg Logo"
                />
              </picture>
            </a>
            <div
              className="d-flex text-center justify-content-center align-items-center"
              role="contentinfo"
            >
              <p className="font-weight-normal font-small mb-0">
                Copyright © Themesberg 2019-
                <span className="current-year">2020</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
