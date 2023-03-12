/* eslint-disable react/no-unescaped-entities */

import { Accordion } from "react-bootstrap";

const FAQSection = () => {
  return (
    <section className="section section-lg" id="faq">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center mb-4 mb-lg-5">
            <h2 className="display-3 mb-4">Facts & Questions</h2>
            <p className="lead">
              Have a question? Read through our FAQ below. If you can't find an
              answer, <br className="d-none d-lg-inline-block" /> please email
              our support team. We're here to help.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <Accordion
              defaultActiveKey="0"
              className="accordion"
              id="accordionExample"
            >
              <Accordion.Item eventKey="0" className="card border-light mb-0">
                <Accordion.Header className="card-header">
                  <h2 className="mb-0">
                    <span className="h6 mb-0 font-weight-bold">
                      What is the purpose of a FAQ?
                    </span>
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow. We're proud
                      to be a part of creating a more open culture and to
                      continue building a product that supports this vision.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="card border-light mb-0">
                <Accordion.Header className="card-header">
                  <h2 className="mb-0">
                    <span className="h6 mb-0 font-weight-bold">
                      What is a FAQ document?
                    </span>
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow. We're proud
                      to be a part of creating a more open culture and to
                      continue building a product that supports this vision.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="card border-light mb-0">
                <Accordion.Header className="card-header">
                  <h2 className="mb-0">
                    <span className="h6 mb-0 font-weight-bold">
                      What are the top 10 interview questions?
                    </span>
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow. We're proud
                      to be a part of creating a more open culture and to
                      continue building a product that supports this vision.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="card border-light mb-0">
                <Accordion.Header className="card-header">
                  <h2 className="mb-0">
                    <span className="h6 mb-0 font-weight-bold">Cookies?</span>
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow. We're proud
                      to be a part of creating a more open culture and to
                      continue building a product that supports this vision.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="card border-light mb-0">
                <Accordion.Header className="card-header">
                  <h2 className="mb-0">
                    <span className="h6 mb-0 font-weight-bold">
                      Copyright Notice
                    </span>
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="card-body">
                    <p className="mb-0">
                      At Themesberg, our mission has always been focused on
                      bringing openness and transparency to the design process.
                      We've always believed that by providing a space where
                      designers can share ongoing work not only empowers them to
                      make better products, it also helps them grow. We're proud
                      to be a part of creating a more open culture and to
                      continue building a product that supports this vision.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
