import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTable, selectTable } from '../redux/tableSlice';
import { FaUser, FaCalendarAlt, FaClock, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SelectTimeReservation } from '../context/SelecteTimeContext';
import { format } from 'date-fns';
import { UserContext } from '../context/UserContext';
import useReservation from '../hooks/useReservation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Detail = () => {
  const [table, setTable] = useState([]);
  const { reservation, isLoading } = useReservation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const Table = useSelector(selectTable);
  const { selectData } = useContext(SelectTimeReservation);
  const { userAuth } = useContext(UserContext);

  useEffect(() => {
    dispatch(getTable(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Table) {
      setTable(Table);
    }
  }, [Table]);

  if (!table) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      tableId: table?.table?._id,
      reservationDate: selectData.date,
      reservationTime: selectData.time,
      numberOfGuests: Number(selectData.people),
    };

    reservation(data);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {table?.table?.image?.filePath && (
            <div className="relative">
              <img
                src={table.table.image.filePath}
                alt="Restaurant"
                className="w-30 h-30 object-cover rounded-lg shadow-lg mb-6"
              />
              <div className="absolute w-24 h-28 inset-0 flex justify-center items-center text-white text-2xl font-bold rounded-lg">
                {table?.table.name}
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-gray-800">
                <FaCalendarAlt className="text-red-500 text-lg" />
                <span className="text-lg font-medium">{format(new Date(selectData.date), 'EEE, MMM dd yyyy')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800">
                <FaClock className="text-red-500 text-lg" />
                <span className="text-lg font-medium">{selectData.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800">
                <FaUser className="text-red-500 text-lg" />
                <span className="text-lg font-medium">{selectData.people} people</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reservation Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={userAuth ? userAuth.name : ''}
                  id="name"
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-sm"
                  placeholder="Enter your name"
                  disabled
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-800">
                  Phone Number
                </label>
                <div className="mt-2 relative rounded-lg shadow-sm">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={userAuth ? userAuth.phone : ''}
                    className="block w-full pl-5 py-3 sm:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                    placeholder="Phone number"
                    disabled
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
              >
                Make Reservation
              </button>
            </form>
          </div>
        </div>
        {/* Right Column */}
        <div className="lg:w-1/2 space-y-6 py-20">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-semibold text-red-500 mb-4">Important Reservation Details</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ensure you arrive at least 10 minutes before your reservation time.</li>
              <li>Reservations are held for a maximum of 15 minutes past the reserved time.</li>
              <li>Cancellation is free up to 24 hours before your reservation.</li>
              <li>For special requests or dietary restrictions, please contact us in advance.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-20 mb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500 text-lg" />
                <span className="text-gray-700">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-600 text-lg" />
                <span className="text-gray-700">info@restaurant.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-600 text-lg" />
                <span className="text-gray-700">123 Main Street, Anytown, USA</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-20">Our Location</h3>
            <div className="h-60 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153157!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2s123+Main+St%2C+Anytown+USA!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Detail;
