import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name:'filter',
    initialState:{search:'' ,for : '',type :'', minPrice : '' , maxPrice : "",area : ""},
    reducers :{
        setSearch: (state,action)=>{
            state.search = action.payload
        },
        setFor : (state,action)=>{
            state.for = action.payload
        },
        setType : (state,action)=>{
            state.type = action.payload
        },
        setMinPrice : (state,action) =>{
            state.minPrice = action.payload
        },
        setMaxPrice : (state,action) =>{
            state.maxPrice = action.payload
        },
        setArea : (state,action)=>{
            state.area = action.payload
        }

    }
})

export const {setSearch ,setFor , setType , setMinPrice,setMaxPrice,setArea } = filterSlice.actions;

export default filterSlice.reducer;