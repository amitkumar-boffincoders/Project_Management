import React, { useContext, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import minilogo from "../images/logo.jpg";
import main from "../images/main-back.png"
import { AuthContext } from '../context-api/auth.context';
import { useNavigate,Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Login = () => {
  
  
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (authState.is_authenticated)
      navigate("/dashboard")
  })
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className='col-sm-12 mt-3  login-main'>
            <div className='row'>
              <div className='col-sm-7'>             
                  <img src={main} alt="" style={{width:"100%"}}/>
              </div>
              <div className='col-sm-5'>
                <div className='feild'>
                  <div className='text-center'>
                    <img src={minilogo} className="m-3" />
                  </div>
                  <form >
                    <h3>Sign In</h3>     
                   <TextField
                    fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Username or email"
                      value="myemail@gmail.com"
                    />
                    <TextField
                    fullWidth sx={{ m: 1 }}
                      required
                      id="outlined-required"
                      className="col-sm-12 mt-3"
                      label="Password"
                      type="password"
                      value="amit"
                    />
                    <div className="d-flex justify-content-between">
                      <div className='checkbox mt-2'>
                        <Checkbox {...label} defaultChecked />Remember me
                      </div>
                      <div className='forgot mt-3'>
                        <Link to={"/forgotpassword"}>Forgot password</Link>
                      </div>
                    </div>
                    <div className='text-center '>
                      <button type='button' className='btn btn-warning m-3' onClick={() => {
                        setAuthState(
                          {
                            is_authenticated: true,
                            user_details: {
                              name: "John Doe  "
                            }
                          }
                        )
                      }} >
                        Sign In
                      </button>
                      <p className='p-3'> New here?<Link to={"/signup"}> Create an Account</Link></p>
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

export default Login