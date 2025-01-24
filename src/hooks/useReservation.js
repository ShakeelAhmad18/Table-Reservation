import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useReservation = () => {

    const [isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate();

    const reservation=async ({tableId,reservationTime,reservationDate,numberOfGuests})=>{

        try {
            setIsLoading(true);
            const res=await axios.post('http://localhost:8000/api/reservation/createReservation',{tableId,reservationTime,reservationDate,numberOfGuests},{withCredentials:true});
            const data=res.data;
            setIsLoading(false);
            toast.success('Reservation successful');
            navigate('/')
        } catch (error) {
            console.error(error.message);
            toast.error('Something Wrong')
        }

    }

  return {reservation,isLoading}
}

export default useReservation
