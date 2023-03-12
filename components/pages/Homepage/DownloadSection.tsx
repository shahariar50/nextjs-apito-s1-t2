const DownloadSection = () => {
  return (
    <div className="section bg-soft" id="download">
      <figure className="position-absolute top-0 left-0 w-100 d-none d-md-block mt-n3">
        <svg
          className="fill-soft"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 43.4"
        >
          <path d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"></path>
        </svg>
      </figure>
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-lg-6">
            <span className="h5 text-muted mb-2 d-block">Download App</span>
            <h2 className="display-3 mb-4">Get started in seconds</h2>
            <p className="lead text-muted">
              Quickly connect to tools and services such as Google Analytics,
              Intercom or Github to track, measure and optimize performance.{" "}
            </p>
            <div className="mt-4 mt-lg-5">
              <a
                href="#"
                className="btn btn-dark btn-download-app mb-xl-0 mr-2 mr-md-3"
              >
                <span className="d-flex align-items-center">
                  <span className="icon icon-brand mr-2 mr-md-3">
                    <span className="fab fa-apple"></span>
                  </span>
                  <span className="d-inline-block text-left">
                    <small className="font-weight-normal d-none d-md-block">
                      Available on
                    </small>{" "}
                    App Store
                  </span>
                </span>
              </a>
              <a href="#" className="btn btn-dark btn-download-app">
                <span className="d-flex align-items-center">
                  <span className="icon icon-brand mr-2 mr-md-3">
                    <span className="fab fa-google-play"></span>
                  </span>
                  <span className="d-inline-block text-left">
                    <small className="font-weight-normal d-none d-md-block">
                      Available on
                    </small>{" "}
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5 ml-lg-auto">
            <picture>
              <img
                className="d-none d-lg-inline-block"
                src="/static/img/illustrations/scene-3.svg"
                alt="Mobile App Illustration"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
