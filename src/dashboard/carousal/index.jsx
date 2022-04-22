import React from "react";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";

export const Carousal = () => {
  return (
    <section className="content">
      <div className="reviews">
        <div className="row">
          <div className="col-xl-6">
            <div className="card m-b-20">
              <div className="dash">
                <h4 className="mt-0 header-title">Slides only</h4>
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img2}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img3}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card m-b-20">
              <div className="dash">
                <h4 className="mt-0 header-title">With controls</h4>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img2}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img3}
                        alt="First slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card m-b-20">
              <div className="dash">
                <h4 className="mt-0 header-title">With Captions</h4>
                <div
                  id="demo"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img2}
                        alt="First slide"
                      />
                      <div className="text-center">
                        <h6>First Slide</h6>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img1}
                        alt="First slide"
                      />
                      <div className="text-center">
                        <h6>Second Slide</h6>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img3}
                        alt="First slide"
                      />
                      <div className="text-center">
                        <h6>Third Slide</h6>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card m-b-20">
              <div className="dash">
                <h4 className="mt-0 header-title">
                  With indicators and control
                </h4>

                <div
                  id="demo1"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#demo1"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#demo1"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#demo1"
                      data-bs-slide-to="2"
                    ></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img3}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img2}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid mx-auto"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousal;
