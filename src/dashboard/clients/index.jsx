import React from "react";
import profile from "../../images/users/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser,faCommentAlt  } from "@fortawesome/free-solid-svg-icons";
import { data } from "./client-data";
import SimpleModal from "./edit_modal";
import AnimatedModal from "./delete_modal";

export const Client = () => {

  return (
    <section className="content">
      <div className="dash">
        <h3>Clients</h3>
      </div>
      <div className="row">
        
          {
            data.map(post =>{
             return(
              <div className="col-sm-6 mt-2 ">
              <div className="client-screen">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="all-client edit-image text-center">
                      <img src={profile} alt="" />
                      <h5>{post.designation}</h5>
                      <div className="d-flex text-center justify-content-center">
                          <SimpleModal/>
                          <AnimatedModal />                  
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="all-client pt-3">
                      <h4>{post.company}</h4>
                      <label>{post.name}</label>
                      <p>
                        {post.discription}
                      </p>
                      <div className="d-flex">
                        <a href="chat.html" type="button" className="btn btn-warning m-3">
                          <FontAwesomeIcon icon={faCommentAlt} /> Chat
                        </a>
                        <a href="profile.html" type="button" className="btn btn-warning m-3">
                          <FontAwesomeIcon icon={faUser} /> Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             ) 
            
            })
        }
          
        </div>
    </section>
  );
};

export default Client;
