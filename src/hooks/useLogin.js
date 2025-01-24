import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

  const {setUserAuth,setAuthToken}=useContext(UserContext);
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate()
    
  const login=async ({phone,password})=>{
      
    try {
  
          if(!password || !phone){
            toast.error('phone and password are required')
          }
  
           setIsLoading(true);
           const res=await axios.post('http://localhost:8000/api/user/loginUser',{phone,password})
           const data=res.data;
           localStorage.setItem('AuthUser',JSON.stringify(data));
           setUserAuth(data);
           setIsLoading(false);
           toast.success('Login successful');
           navigate('/');
          
        } catch (error) {
          console.error(error.message);
          toast.error('Something Wrong')
        }
  
      }

  return {login,isLoading}

}

export default useLogin
