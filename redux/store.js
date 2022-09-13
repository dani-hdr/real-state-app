import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice'
import mapReducer from './mapSlice'
import themeReducer from './themeSlice'
export default configureStore({
    reducer:{
        filter : filterReducer,
        map : mapReducer,
        theme : themeReducer
    }
})