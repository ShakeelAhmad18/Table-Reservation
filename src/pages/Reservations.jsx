import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'

const Reservations = () => {


    const [reservations,setReservations]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    const fetchReservations=async ()=>{

        try{
            setIsLoading(true);
            const res=await axios.get('http://localhost:8000/api/reservation/getReservationByUser',{withCredentials:true});
            const data=res.data;
            setReservations(data.data || []);
            setIsLoading(false);
        }catch(error){
            console.error('Error fetching reservations:',error);
            setIsLoading(false);
        }

    }

    useEffect(()=>{
        fetchReservations();
    },[]);


  return (
    <div className='col-lg-9'>
      <div className="container mt-4 text-2xl">
      <h3 className="mb-4 text-center">Manage Reservations</h3>
      <div className="table-responsive text-2xl">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Table ID</th>
              <th>Table Name</th>
              <th>Area</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((table) => (
              <tr key={table?._id}>
                <td>{table?.reservationId}</td>
                <td>{table?.tableId.tableId}</td>
                <td>{table?.tableId.name}</td>
                <td>{table?.tableId.area}</td>
                <td>{format(table?.reservationDate,'EEE,MMM dd yyyy')}</td>
                <td>{table?.reservationTime}</td>
                <td>{table?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Reservations
