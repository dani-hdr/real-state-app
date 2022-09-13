import React from 'react'
import { BsSearch } from "react-icons/bs";
const SearchInput = ({placeholder,...rest}) => {
  return (
    <div className='flex flex-grow items-center rounded-lg text-black  font-medium text-sm  bg-white dark:bg-slate-700 dark:text-[#fff] py-4 px-5'>
           <BsSearch className='text-gray mr-2 text-lg'/>
           <input {...rest} type="text" className='w-full bg-transparent focus:outline-none placaeholder:text-slate-400   placeholder:tracking-wider' placeholder={placeholder}/> 
    </div>
  )
}

export default SearchInput