import React, { useEffect, useState } from 'react';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import DJBoothGrid from '../components/DjBoothGrid';
import Bar360Grid from '../components/Bar360Grid';
import BarGrid from '../components/BarGrid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const formatDateToLocal = (date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset);
  return localDate.toISOString().split('T')[0];
};



const Table = () => {
  const [people, setPeople] = useState(3);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);
  const [area, setArea] = useState([]);
  const formatDate = formatDateToLocal(new Date(date));

  const fetchAvailableSlots = async (selectedDate) => {
    const formattedDate = formatDateToLocal(new Date(selectedDate));
    try {
      const response = await axios.get('http://localhost:8000/api/restaurant/available-time-slots', {
        params: { date: formattedDate },
      });
      setAvailableSlots(response.data.timeSlots || []);
    } catch (error) {
      console.error('Error fetching available time slots:', error);
      setAvailableSlots([]);
    }
  };

  const fetchAvailableTables = async () => {

    const formattedDate = formatDateToLocal(new Date(date));
    const formattedTime = time.replace(/^0/, '');

    try {

      if(formattedDate && formattedTime && people){

      const response = await axios.get('http://localhost:8000/api/table/available-tables', {
        params: { date: formattedDate, time: formattedTime, capacity: people },
      });

      setAvailableTables(response.data.availableTables || []);
      
    }
    
    } catch (error) {
      console.error('Error fetching available tables:', error);
      setAvailableTables([]);
    }
  };

  const getTables = async () => {
    const res = await axios.get('http://localhost:8000/api/table/getTables');
    const data = res.data.table;
    setArea(data);
  };

  useEffect(() => {
    fetchAvailableSlots(date);
    fetchAvailableTables();
    getTables();
  }, [date, time, people]);

  const mainArea = area ? area.filter((data) => data.area === 'Bar-360') : [];
  const djBooth = area ? area.filter((data) => data.area === 'DJ-Booth') : [];
  const barArea = area ? area.filter((data) => data.area === 'Bar') : [];

  const selectReservationData={
      time:time,
      date:formatDate,
      people:people
  }


  return (
    <div>
      <Navbar/>
    <div>
      {/* Sticky Reservation Section */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="w-full lg:w-2/3 bg-gray-300 lg:mt-[55px] mt-44 p-4 rounded-lg shadow-lg fixed top-[calc(var(--navbar-height)+15px)] z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Number of People */}
                <div className="flex items-center gap-2">
                  <FaUser className="text-red-500 text-lg" />
                  <select
                    className="w-full border text-black border-red-300 bg-gray-100  rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} People
                      </option>
                    ))}
                  </select>
                </div>
                {/* Date Picker */}
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-red-500 text-lg" />
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="w-full border text-black bg-gray-100 border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
                  />
                </div>
                {/* Time Selector */}
                <div className="flex items-center gap-2">
                  <FaClock className="text-red-500 text-lg" />
                  <select
                    className="w-full border text-black bg-gray-100 border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 p-2"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    {availableSlots.length > 0 ? (
                      availableSlots.map((slot) => (
                        <option key={slot._id} value={slot.time}>
                          {slot.time}
                        </option>
                      ))
                    ) : (
                      <option>No Slots Available</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className='lg:mt-32 mt-44'>
      <DJBoothGrid djBooth={djBooth} availableTables={availableTables} selectReservationData={selectReservationData}/>
      <Bar360Grid mainArea={mainArea} availableTables={availableTables} selectReservationData={selectReservationData}/>
      <BarGrid barArea={barArea} availableTables={availableTables} selectReservationData={selectReservationData}/>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Table;



