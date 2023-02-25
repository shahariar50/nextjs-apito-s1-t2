const HeroSection = () => {
  return (
    <section className="section section-header text-dark pb-md-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center mb-5 mb-md-7">
            <h1 className="display-2 font-weight-bolder mb-4">
              Simple & Reliable.
            </h1>
            <p className="lead mb-4 mb-lg-5">
              Simpler remembers your important details, so you can fill carts,
              not forms. And everything is encrypted so you can speed safely
              through checkout.
            </p>
            <div>
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
          <div className="col-12 col-md-10 justify-content-center">
            <picture>
              <img
                className="d-none d-md-inline-block"
                src="/static/img/illustrations/scene.svg"
                alt="Mobile App Mockup"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
