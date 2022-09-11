import React from 'react'
import { BsSearch } from "react-icons/bs";
const SearchInput = ({placeholder,...rest}) => {
  return (
    <div className='flex flex-grow items-center rounded-lg text-black font-medium text-sm  bg-white py-4 px-5'>
           <BsSearch className='text-gray mr-2 text-lg'/>
           <input {...rest} type="text" className='w-full bg-transparent focus:outline-none placeholder:text-gray placeholder:tracking-wider' placeholder={placeholder}/> 
    </div>
  )
}

export default SearchInput