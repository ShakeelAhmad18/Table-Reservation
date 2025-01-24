import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectTimeReservation } from "../context/SelecteTimeContext";

const DJBoothGrid = ({ djBooth,availableTables,selectReservationData}) => {

    const {setSelectData}=useContext(SelectTimeReservation);
    const navigate=useNavigate();

    /*const isAvailable = availableTables.some(
        (table) => table.tableId === seat.tableId
      );*/
    
      const handleClick = (image) => {

        const isAvaiable=availableTables?.some((table) => table.tableId === image?.tableId);
           if (isAvaiable) {
             navigate(`/detail/${image?.tableId}`);
           }
           localStorage.setItem('ReservedTime',JSON.stringify(selectReservationData));
           setSelectData(selectReservationData);
         };


  return (
    <div className="p-6 bg-white">
     <div className="text-black text-lg font-semibold mb-4  text-center">DJ Booth</div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 justify-center items-center flex flex-col gap-8 lg:ml-20">
          {djBooth?.slice(0, 2).map((image, index) => (
            <div
            key={djBooth?.tableId}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some((table) => table.tableId === image.tableId)
                  ? 'border-green-600 w-28 h-30 shadow-lg transform hover:scale-105 transition-all duration-300'
                  : 'border-gray-500 w-28 h-30 opacity-50'
              }`}
              onClick={()=>handleClick(image)}
            >
            <img
              key={`left-${index}`}
              src={image.image.filePath}
              alt={`DJ Booth Left ${index + 1}`}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
                  {image.name}
            </div>
            </div>
          ))}
        </div>

        {/* Middle Grid */}
        <div className="lg:col-span-8 lg:ml-24 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {djBooth?.slice(2, 8).map((image, index) => (
            <div
            key={djBooth?.tableId}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some((table) => table.tableId === image.tableId)
                  ? 'border-green-600 w-28 h-30 shadow-lg transform hover:scale-105 transition-all duration-300'
                  : 'border-gray-500 w-28 h-30 opacity-50'
              }`}
              onClick={()=>handleClick(image)}
            >
            <img
              key={`middle-${index}`}
              src={image.image.filePath}
              alt={`DJ Booth Middle ${index + 3}`}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
                  {image.name}
               </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 justify-center items-center flex flex-col lg:mr-28 gap-8">
           {djBooth?.slice(8, 10).map((image, index) => (
            <div 
            key={djBooth?.tableId}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some((table) => table.tableId === image.tableId)
                  ? 'border-green-600 w-28 h-30 shadow-lg transform hover:scale-105 transition-all duration-300'
                  : 'border-gray-500 w-28 h-30 opacity-50'
              }`}
              onClick={()=>handleClick(image)}
            >
              <img
                   key={`right-${index}`}
                   src={image.image.filePath}
                    alt={`DJ Booth Right ${index + 1}`}
                    className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
               />
               <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
                  {image.name}
               </div>
               </div>
               ))}
            </div>
      </div>
    </div>
  );
};

export default DJBoothGrid;
