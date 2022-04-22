import React from "react";
import profile from "../../images/users/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Reviews = () => {
  return (
    <section className="content">
      <div className="dash">
        <h4>Review</h4>
      </div>
      <div className="reviews">
        <div className="row">
          <div className="col-sm-4">
            <div className="custmor  mb-2">
              <h1>4.0</h1>
              <p>based on 1,032 ratings</p>
              <div className="d-flex">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon className="disable" icon={faStar} />
              </div>
              <ul>
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="bar">
                      <h1>
                        5 <FontAwesomeIcon icon={faStar} />
                      </h1>
                    </div>
                    <div className="pt-3">
                      <p>661</p>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="bar">
                      <h1>
                        4<FontAwesomeIcon icon={faStar} />
                      </h1>
                    </div>
                    <div className="pt-3">
                      <p>661</p>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar1"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="bar">
                      <h1>
                        3<FontAwesomeIcon icon={faStar} />
                      </h1>
                    </div>
                    <div className="pt-3">
                      <p>661</p>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar2"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="bar">
                      <h1>
                        2 <FontAwesomeIcon icon={faStar} />
                      </h1>
                    </div>
                    <div className="pt-3">
                      <p>661</p>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar3"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div className="bar">
                      <h1>
                        1 <FontAwesomeIcon icon={faStar} />
                      </h1>
                    </div>
                    <div className="pt-3">
                      <p>661</p>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar4"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custmor mb-2">
              <h1>What Customers Like </h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Fun Factor</td>
                    <td>72% votes</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Great Value</td>
                    <td>52% votes</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>My Task</td>
                    <td>35% votes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="custmor mb-2">
              <h1>What Need Improvement</h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Value for Money</td>
                    <td>12% votes</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Custmor Service</td>
                    <td>8 votes</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Loading Team</td>
                    <td>2 votes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="dropdown d-flex justify-content-end m-3">
              <button
                type="button"
                className="btn btn-warning dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Sort By
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="">
                    Most Recent
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Positive First
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Negative First
                  </a>
                </li>
              </ul>
            </div>
            <div className="scroll">
              <div className="revier">
                <div className="d-flex justify-content-between mb-3">
                  <div className="col-sm-6 image">
                    <img src={profile} alt="" />
                    <div className="review-pro">
                      <h5>
                        John Doe   <span>1050 followers</span>
                      </h5>
                      <p>3 hours ago</p>
                    </div>
                  </div>

                  <div className="p-2 ">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <i className="ti-star disable"></i>
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat in sed accusantium commodi impedit soluta
                    laboriosam rerum, odit eos, incidunt totam blanditiis sint
                    ipsum doloremque voluptate, quae nulla. Debitis, officia.
                  </p>
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-warning" type="button">
                      <i className="ti-thumb-up"></i>
                      Like (105)
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment"></i>
                      Publice Comment
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment-alt"></i>
                      Direct Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="revier">
                <div className="d-flex justify-content-between mb-3">
                  <div className="col-sm-6 image">
                    <img src={profile} alt=""/>
                    <div className="review-pro">
                      <h5>
                        John Doe   <span>1050 followers</span>
                      </h5>
                      <p>3 hours ago</p>
                    </div>
                  </div>

                  <div className="p-2 ">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <i className="ti-star disable"></i>
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat in sed accusantium commodi impedit soluta
                    laboriosam rerum, odit eos, incidunt totam blanditiis sint
                    ipsum doloremque voluptate, quae nulla. Debitis, officia.
                  </p>
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-warning" type="button">
                      <i className="ti-thumb-up"></i>
                      Like (105)
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment"></i>
                      Publice Comment
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment-alt"></i>
                      Direct Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="revier">
                <div className="d-flex justify-content-between mb-3">
                  <div className="col-sm-6 image">
                    <img src={profile} alt="" />
                    <div className="review-pro">
                      <h5>
                        John Doe   <span>1050 followers</span>
                      </h5>
                      <p>3 hours ago</p>
                    </div>
                  </div>

                  <div className="p-2 ">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <i className="ti-star disable"></i>
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat in sed accusantium commodi impedit soluta
                    laboriosam rerum, odit eos, incidunt totam blanditiis sint
                    ipsum doloremque voluptate, quae nulla. Debitis, officia.
                  </p>
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-warning" type="button">
                      <i className="ti-thumb-up"></i>
                      Like (105)
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment"></i>
                      Publice Comment
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment-alt"></i>
                      Direct Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="revier">
                <div className="d-flex justify-content-between mb-3">
                  <div className="col-sm-6 image">
                    <img src={profile} alt="" />
                    <div className="review-pro">
                      <h5>
                        John Doe   <span>1050 followers</span>
                      </h5>
                      <p>3 hours ago</p>
                    </div>
                  </div>

                  <div className="p-2 ">
                    <div className="d-flex">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <i className="ti-star disable"></i>
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat in sed accusantium commodi impedit soluta
                    laboriosam rerum, odit eos, incidunt totam blanditiis sint
                    ipsum doloremque voluptate, quae nulla. Debitis, officia.
                  </p>
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-warning" type="button">
                      <i className="ti-thumb-up"></i>
                      Like (105)
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment"></i>
                      Publice Comment
                    </button>
                    <button className="btn btn-warning" type="button">
                      <i className="ti-comment-alt"></i>
                      Direct Message
                    </button>
                  </div>
                </div>
              </div>
              <form>
                <textarea
                  name="message"
                  rows="10"
                  cols="30"
                  placeholder="Replay"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
