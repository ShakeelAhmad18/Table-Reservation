import React, { useState } from 'react';
import useVerify from '../hooks/useVerify';

const VerifyOtp = () => {
  const {verify}=useVerify();
const [input, setInput] = useState({
  otp:'',
});

  const handleVerify = (e) => {
    e.preventDefault();
    
    verify(input)
    
  };

  return (
    <div className="verification-area bg-light">
      <div className="container">
        <div className="row min-vh-100 align-items-center justify-content-center">
          <div className="col-12 col-md-6">
            <div className="wrapper shadow-md radius-lg bg-white p-4">
              <div className="text-center mb-4">
                <h3 className="mb-3">Verify OTP</h3>
                <p className="text-muted">Please enter the OTP sent to your phone.</p>
              </div>
              <form onSubmit={handleVerify}>
                <div className="form-group mb-4">
                  <label htmlFor="otp" className="form-label color-dark">
                    OTP<span className="color-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={input.otp}
                    onChange={(e) =>setInput({...input,otp:e.target.value})}
                    className="form-control"
                    placeholder="Enter OTP"
                    required
                    maxLength="6"
                  />
                </div>
                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-gradient w-100"
                    aria-label="Verify OTP"
                  >
                    Verify OTP
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-link"
                    onClick={() => console.log('Resend OTP')}
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
