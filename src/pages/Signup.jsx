import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast from 'react-hot-toast'
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const {signUp}=useSignup()
  const [input, setInput] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit=(e)=>{

       e.preventDefault();

       if(input.password != input.confirmPassword){
        return toast.error('Confirm Password Does not Match')
       }
        signUp(input)
  }

  return (
    <div className="authentication-area bg-light">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-12">
            <div className="wrapper shadow-md radius-lg bg-white">
              <div className="row align-items-center">
                <div className="col-lg-6 bg-primary-light">
                  <div className="content">
                    <div className="logo mb-3 p-30">
                      <Link to="/" target="_self" title="Teeno">
                        <img src="assets/images/logo/logo1.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="svg-image">
                      <img
                        className="lazyload"
                        src="/assets/images/login.svg"
                        data-src="/assets/images/login.svg"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-form">
                    <Link
                      to="/"
                      className="icon-link"
                      title="Go back to home"
                      target="_self"
                    >
                      <i className="fal fa-home" />
                    </Link>
                    <div className="title">
                      <h3 className="mb-30">Signup to TabledBooking</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group mb-20">
                            <label className="form-label color-dark">
                              Name<span className="color-red">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Name"
                              required
                              value={input.name}
                              onChange={(e) =>
                                setInput({ ...input, name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-20">
                            <label
                              htmlFor="phone"
                              className="form-label color-dark"
                            >
                              Phone<span className="color-red">*</span>
                            </label>
                            <PhoneInput
                              country={'us'}
                              value={input.phone}
                              onChange={(phone) => {
                                if (phone.startsWith("+")) {
                                  setInput((prev) => ({ ...prev, phone }));
                                } else {
                                  setInput((prev) => ({
                                    ...prev,
                                    phone: `+${phone}`,
                                  }));
                                }
                              }}                             
                               inputStyle={{
                                width:'100%',
                              }}
                              inputProps={{
                                name: 'phone',
                                required: true,
                                className: 'form-control'
                              }}
                              international
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-20">
                            <label className="form-label color-dark">
                              Password<span className="color-red">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="password"
                                name="password"
                                id="password3"
                                value={input.password}
                                onChange={(e) =>
                                  setInput({
                                    ...input,
                                    password: e.target.value,
                                  })
                                }
                                className="form-control"
                                placeholder="Enter password"
                                required
                              />
                              <span className="show-password-field">
                                <i className="show-icon" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-20">
                            <label
                              htmlFor="confirmPassword"
                              className="form-label color-dark"
                            >
                              Confirm Password<span className="color-red">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="password"
                                name="password"
                                value={input.confirmPassword}
                                onChange={(e) =>
                                  setInput({
                                    ...input,
                                    confirmPassword: e.target.value,
                                  })
                                }
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Confirm password"
                                required
                              />
                              <span className="show-password-field">
                                <i className="show-icon" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-20">
                        <button className="btn btn-lg btn-primary btn-gradient w-100">
                          Signup
                        </button>
                        <div className="link font-sm mt-15">
                          Already a member?{' '}
                          <Link
                            to="/login"
                            target="_self"
                            title="Login Now"
                          >
                            Login Now
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
