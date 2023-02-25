/* eslint-disable react/no-unescaped-entities */
const StatisticSection = () => {
  return (
    <section className="section section-sm py-0">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <h2 className="h6 font-weight-bold text-brown">
              We're proudly featured by
            </h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col d-flex justify-content-center flex-wrap">
            <a
              href="#"
              aria-label="Stripe brand logo"
              className="icon icon-xl icon-dark mr-4 mr-sm-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Stripe"
            >
              <span className="fab fa-stripe"></span>
            </a>
            <a
              href="#"
              aria-label="Digg brand logo"
              className="icon icon-xl icon-dark mr-4 mr-sm-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Digg"
            >
              <span className="fab fa-digg"></span>
            </a>
            <a
              href="#"
              aria-label="FedEx brand logo"
              className="icon icon-xl icon-dark mr-4 mr-sm-5"
              data-toggle="tooltip"
              data-placement="top"
              title="FedEx"
            >
              <span className="fab fa-fedex"></span>
            </a>
            <a
              href="#"
              aria-label="Ember brand logo"
              className="icon icon-xl icon-dark mr-4 mr-sm-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Ember"
            >
              <span className="fab fa-ember"></span>
            </a>
            <a
              href="#"
              aria-label="Beyond brand logo"
              className="icon icon-xl icon-dark mr-4 mr-sm-5"
              data-toggle="tooltip"
              data-placement="top"
              title="Beyond"
            >
              <span className="fab fa-d-and-d-beyond"></span>
            </a>
            <a
              href="#"
              aria-label="AngryCreative brand logo"
              className="icon icon-xl icon-dark"
              data-toggle="tooltip"
              data-placement="top"
              title="AngryCreative"
            >
              <span className="fab fa-angrycreative"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
