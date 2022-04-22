import React from 'react'
import TextField from "@mui/material/TextField";
import minilogo from "../images/logo.jpg";
import sign_up from "../images/sign_up.png"
import { Link } from 'react-router-dom';


export const SignUp = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className='col-sm-12 mt-3  login-main'>
            <div className='row'>
              <div className='col-sm-7'>             
                  <img src={sign_up} alt="" style={{width:"100%"}}/>
              </div>
              <div className='col-sm-5'>
                <div className='feild'>
                  <div className='text-center'>
                    <img src={minilogo} className="m-3" />
                  </div>
                  <form >
                    <h3>Sign Up</h3>     
                  <div className='row'>
                      <div className='col-sm-6'>
                      <TextField
                      fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="First Name"
                      type="text"
                    />
                      <TextField
                      fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Phone No"
                      type="no"
                    />
                      <TextField
                      fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Password"
                      value=""
                     
                    />
                  
                      </div>
                      <div className='col-sm-6'>
                      <TextField
                      fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Last Name"
                      type="text"
                    />
                     <TextField
                      fullWidth sx={{ m: 1 }}
                      
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Email"
                      value=""
                    />
                      <TextField
                      fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Confirm password"
                      value=""
                 
                    />
                      </div>
                  </div>

                    <div className='text-center '>
                      <button type='button' className='btn btn-warning m-3' >
                        Sign UP
                      </button>
                      <p className='p-3'> Already have an account?<Link to={"/login"}> Sign In</Link></p>
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
export default SignUp