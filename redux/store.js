import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice'
import mapReducer from './mapSlice'
export default configureStore({
    reducer:{
        filter : filterReducer,
        map : mapReducer
    }
})