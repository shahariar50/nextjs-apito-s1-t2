/* eslint-disable react/no-unescaped-entities */
const AboutSection = () => {
  return (
    <section className="section section-lg" id="about">
      <div className="container">
        <div className="row justify-content-center mb-5 mb-lg-7">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="h1 mb-4">Better in every way</h2>
            <p className="lead">
              Self-Service Analytics or ad hoc reporting gives users the ability
              to develop rapid reports, empowering users to analyze their data.
            </p>
          </div>
        </div>
        <div className="row row-grid align-items-center mb-5 mb-lg-7">
          <div className="col-12 col-lg-5">
            <h2 className="mb-4">A thoughtful way to pay</h2>
            <p>
              Simpler App remembers your important details, so you can fill
              carts, not forms. And everything is encrypted so you can speed
              safely through checkout.
            </p>
            <p>
              Now, you can offset the carbon emissions produced by your
              deliveries—for free. All you have to do is check out with Shop
              Pay, one of the first carbon-neutral way to pay.
            </p>
            <a href="#" className="btn btn-dark mt-3 animate-up-2">
              Learn More
              <span className="icon icon-xs ml-2">
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
          <div className="col-12 col-lg-6 ml-lg-auto">
            <picture>
              <img
                src="/static/img/illustrations/scene-3.svg"
                className="w-100"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="row row-grid align-items-center mb-5 mb-lg-7">
          <div className="col-12 col-lg-5 order-lg-2">
            <h2 className="mb-4">Get it. Don't sweat it.</h2>
            <p>
              We track your desktop and mobile keyword rankings from any
              location and plot your full ranking history on a handy graph.
            </p>
            <p>
              You can set up automated ranking reports to be sent to your email
              address, so you’ll never forget to check your ranking progress.
            </p>
            <a href="#" className="btn btn-dark mt-3 animate-up-2">
              Learn More
              <span className="icon icon-xs ml-2">
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
          <div className="col-12 col-lg-6 mr-lg-auto">
            <picture>
              <img
                src="/static/img/illustrations/scene-2.svg"
                className="w-100"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">98%</h2>
                <span>
                  Average satisfaction rating received in the past year.
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">24/7</h2>
                <span> Our support team is a quick chat or email away.</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-light p-4">
              <div className="card-body">
                <h2 className="display-2 mb-2">220k+</h2>
                <span>
                  Extension installs from the two major mobile app stores.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
