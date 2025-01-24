import React,{ useContext,useEffect } from 'react'
import Tables from './pages/Tables'
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom'
import Detail from './pages/Detail'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyOtp from './pages/Verifyotp'
import { UserContext } from './context/UserContext'
import Dashboard from './pages/Dashboard'
import Reservations from './pages/Reservations'


axios.defaults.withCredentials=true;



function App() {

  const {userAuth}=useContext(UserContext);
  const navigate=useNavigate();

  useEffect(()=>{

    const loginStatus=async ()=>{

      const res=await axios.get('http://localhost:8000/api/user/loginStatus',{withCredentials:true});
      const data=res.data;
      if(data === false){
        localStorage.removeItem('AuthUser');
        navigate('/login');
      }

    }

    loginStatus();

  },[])


  return (
    <>
     <Routes>
      <Route path='/' element={<Tables/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verify' element={<VerifyOtp/>}/>
      <Route path='/dashboard' element={userAuth ? <Dashboard/> : <Navigate to='/login'/>}>
        <Route path='reservation' element={<Reservations/>}/>
      </Route>
      <Route path='/detail/:id' element={userAuth ? <Detail/> : <Navigate to='/login'/>}/>
     </Routes>
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}


export default App
