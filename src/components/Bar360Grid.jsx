import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectTimeReservation } from "../context/SelecteTimeContext";

const Bar360Grid = ({
  mainArea,
  availableTables,
  selectReservationData,
  barArea,
}) => {
  const { setSelectData } = useContext(SelectTimeReservation);
  const navigate = useNavigate();

  const handleClick = (image) => {
    const isAvailable = availableTables?.some(
      (table) => table.tableId === image?.tableId
    );
    if (isAvailable) {
      navigate(`/detail/${image?.tableId}`);
    }
    localStorage.setItem("ReservedTime", JSON.stringify(selectReservationData));
    setSelectData(selectReservationData);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Sidebar */}
      <div className="flex sm:flex-row lg:flex-col lg:ml-20 lg:mt-10 gap-4">
        {barArea?.slice(4, 8)?.map((image, index) => (
          <div
            key={barArea._id}
            className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
              availableTables?.some((table) => table.tableId === image.tableId)
                ? "border-green-600 w-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                : "border-gray-500 w-20 opacity-50"
            }`}
            onClick={() => handleClick(image)}
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
      {/* Middle Grid Area */}
      <div className="w-full lg:w-2/2 bg-white p-4 space-y-6 flex flex-col items-center">
        <div className="text-black text-lg font-semibold mb-2 text-center">
          Bar 360
        </div>
        <div className="grid grid-cols-4 gap-4 lg:space-x-10">
          {mainArea?.slice(4, 8).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 lg:space-x-10">
          {mainArea?.slice(4, 7).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 lg:space-x-10">
          {mainArea?.slice(7, 11).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 lg:space-x-10">
          {mainArea?.slice(11, 15).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 lg:space-x-10">
          {mainArea?.slice(15, 17).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 lg:space-x-10">
          {mainArea?.slice(17, 21).map((image, index) => (
            <div
              key={image.tableId}
              className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                availableTables?.some(
                  (table) => table.tableId === image.tableId
                )
                  ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
                  : "border-gray-500 w-20 h-20 opacity-50"
              }`}
              onClick={() => handleClick(image)}
            >
              <img
                src={image.image.filePath}
                alt={image.name}
                className="w-full h-full rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="w-full lg:w-1/6 md:h-[800px] lg:h-[800px] bg-white p-4 lg:mr-4 rounded-lg flex justify-center">
        <div className="flex flex-col items-center w-16 bg-gray-900 text-white py-6 shadow-lg rounded-lg">
          <div className="flex-grow flex items-center justify-center text-lg font-bold">
            BAR
          </div>
          <div className="border-t border-white w-full my-2"></div>
          <div className="flex items-center justify-center text-lg font-bold h-24 rotate-90 writing-mode-vertical-lr">
            TARIMA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar360Grid;

{
  /*
 <div className="grid grid-cols-4 lg:ml-64 gap-4">
   {mainArea?.slice(0, 4).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-1-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 1}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}
{
  /* Second Row: 3 Images, 3 Columns 
 <div className="grid grid-cols-3 lg:ml-80 ml-8 gap-4">
   {mainArea.slice(4, 7).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-2-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 5}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}

{
  /* Third Row: 4 Images, 4 Columns 
 <div className="grid grid-cols-4 lg:ml-64 gap-4">
   {mainArea.slice(7, 11).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-3-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 8}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}

{
  /* Fourth Row: 2 Images, 2 Columns 
 <div className="grid grid-cols-2 lg:ml-96 ml-16  gap-4">
   {mainArea.slice(11, 13).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-4-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 12}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}

{
  /* Fifth Row: 2 Images, 2 Columns 
 <div className="grid grid-cols-2 lg:ml-96 ml-16 gap-4">
   {mainArea.slice(13, 15).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-5-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 14}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}

{
  /* Sixth Row: 2 Images, 2 Columns
 <div className="grid grid-cols-2 ml-16 lg:ml-96 gap-4">
   {mainArea.slice(15, 17).map((image, index) => (
     <div
       key={mainArea._id}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         key={`row-6-${index}`}
         src={image.image.filePath}
         alt={`Main Area ${index + 16}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>; */
}

{
  /* Seventh Row: 4 Images, 4 Columns 
 <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4 lg:ml-64">
   {mainArea?.slice(17, 21).map((image, index) => (
     <div
       key={`row-7-${index}`}
       className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
         availableTables?.some((table) => table.tableId === image.tableId)
           ? "border-green-600 w-20 h-20 shadow-lg transform hover:scale-105 transition-all duration-300"
           : "border-gray-500 w-20 h-20 opacity-50"
       }`}
       onClick={() => handleClick(image)}
     >
       <img
         src={image.image.filePath}
         alt={`Main Area ${index + 18}`}
         className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
       />
       <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg rounded-md">
         {image.name}
       </div>
     </div>
   ))}
 </div>;*/
}
