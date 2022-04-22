import React from "react";
import profile from "../../images/users/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { list } from "./contact-data";

export const Contact = () => {
  return (
    <section className="support ">
      <div className="dash">
        <h4>Contact</h4>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="count mb-3">
            <div className="d-flex justify-content-between mb-3">
              <div className="col-sm-6 image">
                <img src={profile} />
                <div className="review-pro">
                  <h5>John Doe   </h5>
                  <p>@SaraHopkins.com</p>
                </div>
              </div>
              <div className="edit ">
                <button type="button">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button type="button">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count mb-3">
            <div className="d-flex justify-content-between mb-3">
              <div className="col-sm-6 image">
                <img src={profile} />
                <div className="review-pro">
                  <h5>John Doe   </h5>
                  <p>@SaraHopkins.com</p>
                </div>
              </div>
              <div className="edit ">
                <button type="button">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button type="button">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count mb-3">
            <div className="d-flex justify-content-between mb-3">
              <div className="col-sm-6 image">
                <img src={profile} />
                <div className="review-pro">
                  <h5>John Doe   </h5>
                  <p>@SaraHopkins.com</p>
                </div>
              </div>
              <div className="edit ">
                <button type="button">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button type="button">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      {
            list.map(post =>{
             return(
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={post.img} />
            <h4>{post.name}</h4>
            <p>
              {post.discription}
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
            ) 
            
          })
      }

        {/* <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="count mb-3 text-center">
            <img src={profile} />
            <h4>John Doe  </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <button className="btn-warning mb-3" type="button">
              Project
            </button>
            <button className="btn-warning mb-3" type="button">
              Message
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
