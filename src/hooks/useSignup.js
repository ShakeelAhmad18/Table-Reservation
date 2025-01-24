import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {


     const [isLoading,setIsLoading]=useState(false);
      const navigate=useNavigate();
        const signUp=async ({name,phone,password})=>{

            
            if(password.length < 8){
                return toast.error('Password must be at least 8 characters long')
            }

            setIsLoading(true);

            try {
                
                const res=await axios.post('http://localhost:8000/api/user/registerUser',{name,phone,password},{withCredentials:true});
                const data=res.data;
                if(data.message === 'Message Sent'){
                   navigate('/verify')
                   toast.success('OTP send to your Provided number')
                }

            } catch (error) {
                toast.error(error.response.data.message)
            }finally{
                setIsLoading(false);
            }
        }



  return {signUp,isLoading}
}

export default useSignup
