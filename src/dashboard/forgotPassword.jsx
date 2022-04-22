import React from 'react'
import minilogo from "../images/logo.jpg";
import TextField from "@mui/material/TextField";
import forgot from "../images/forgot.png";
import forgot1 from "../images/users/forgot-img.png";
import {Link } from 'react-router-dom';

export const ForgotPassword = () => {
  return (
    <section className="login">
    <div className="container">
      <div className="row">
        <div className='col-sm-12 mt-3  login-main'>
          <div className='row'>
            <div className='col-sm-7'>             
                <img src={forgot} alt="" style={{width:"100%"}}/>
            </div>
            <div className='col-sm-5'>
              <div className='feild'>
                <div className='text-center'>
                  <img src={minilogo} className="m-3" />
                </div>
                <form >
                   <div className='text-center'>
                   <img src={forgot1} style={{width:"84%"}}/>
                   </div>
                  <h3 className='pt-3'>Forgot Password</h3>     
                 <TextField
                  fullWidth sx={{ m: 1 }}
                    required
                    id="outlined-required"
                    className="col-sm-12 mt-3"
                    label="Enter your email"
                    value=""
                  />
                  <div className='text-center '>
                  <button type='button' className='btn btn-warning m-3' >
                        Send Link
                      </button>
                    <p ><Link to={"/login"}> Back to Sign In</Link></p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section >
  )
}

export default ForgotPassword