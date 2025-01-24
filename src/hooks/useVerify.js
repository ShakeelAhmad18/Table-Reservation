import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useVerify = () => {

    const [isLoading,setIsLoading]=useState(false);
    const {setUserAuth}=useContext(UserContext);
    const navigate=useNavigate();

    const verify=async ({otp})=>{

         try {

            setIsLoading(true);
            const res=await axios.post('http://localhost:8000/api/user/registerUser/verify',{otp},{withCredentials:true});
            const data=res.data;
            localStorage.setItem('AuthUser',JSON.stringify(data));
            setUserAuth(data);
            setIsLoading(false);
            toast.success('Sign up Successfully');
            navigate('/')

         } catch (error) {
            console.log(error.data.res.message)
            toast.error("Something went wronge")
         }
    }

  return {verify,isLoading}
}

export default useVerify
