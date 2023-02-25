const BenifitSection = () => {
  return (
    <section className="section section-lg py-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card border-0 bg-white text-center p-1">
              <div className="card-header bg-white border-0 pb-0">
                <div className="icon icon-lg icon-primary mb-4">
                  <span className="fas fa-money-bill-wave"></span>
                </div>
                <h2 className="h3 text-dark m-0">Pay better</h2>
              </div>
              <div className="card-body">
                <p>
                  Speed through checkout and offset delivery at the same time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card border-0 bg-white text-center p-1">
              <div className="card-header bg-white border-0 pb-0">
                <div className="icon icon-lg icon-primary mb-4">
                  <span className="fas fa-map-marked-alt"></span>
                </div>
                <h2 className="h3 text-dark m-0">Track better</h2>
              </div>
              <div className="card-body">
                <p>
                  Get real-time delivery updates from cart to home in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 bg-white text-center p-1">
              <div className="card-header bg-white border-0 pb-0">
                <div className="icon icon-lg icon-primary mb-4">
                  <span className="fas fa-shopping-basket"></span>
                </div>
                <h2 className="h3 text-dark m-0">Shop better</h2>
              </div>
              <div className="card-body">
                <p>Upgrade with personal settings from your favorite stores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenifitSection;
