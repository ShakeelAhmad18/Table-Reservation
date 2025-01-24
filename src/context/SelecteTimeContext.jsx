import { createContext, useState } from "react";

export const SelectTimeReservation=createContext();

export const SelectTimeReservationProvider=({children})=>{
    
    const [selectData,setSelectData]=useState(JSON.parse(localStorage.getItem('ReservedTime')) || []);

   return (
     <SelectTimeReservation.Provider
        value={{
            selectData,
            setSelectData
        }}
     >
        {children}
     </SelectTimeReservation.Provider>
   )
}