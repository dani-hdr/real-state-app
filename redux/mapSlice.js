import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
    name: 'map',
    initialState : {isMarkerHoverd : false , markerId : 0},
    reducers : {
        setHover: (state,action)=>{
            state.isMarkerHoverd = true
            state.markerId = action.payload
        },
        unsetHover : (state,action) => {
            state.isMarkerHoverd =  false
            state.markerId = action.payload
        }
    }
})

export const { setHover,unsetHover } = mapSlice.actions

export default mapSlice.reducer