import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './redux/tableSlice'


const Store =configureStore({
  reducer:{
    Table:tableReducer,
  }
})


export default Store
