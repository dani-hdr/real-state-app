import React from 'react'
import { FaHeart } from "react-icons/fa";
const Like = ({active}) => {
  return (
    <div className={`p-2 bg-white ${active ? 'text-red-500' : 'text-gray'} rounded-md`}>
     <FaHeart/>
    </div>
  )
}

export default Like