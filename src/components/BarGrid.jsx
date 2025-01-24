import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SelectTimeReservation } from '../context/SelecteTimeContext';

const BarGrid = ({barArea,availableTables,selectReservationData}) => {
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
    <div className="bg-white p-4 space-y-6">
        <div className="text-black text-lg font-semibold mb-2 text-center">Bar</div>
        <div className='grid grid-cols-4 lg:ml-64 gap-4 lg:mr-52'>
        {barArea?.map((image, index) => (
        <div
        key={barArea._id}
        className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
            availableTables?.some((table) => table.tableId === image.tableId)
              ? 'border-green-600 shadow-lg transform hover:scale-105 transition-all duration-300'
              : 'border-gray-500 opacity-50'
          }`}
          onClick={()=>handleClick(image)}
        >
        <img
          key={`${index}`}
          src={image.image.filePath}
          alt={`Bar Area ${index + 1}`}
          className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
          {image.name}
        </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default BarGrid
