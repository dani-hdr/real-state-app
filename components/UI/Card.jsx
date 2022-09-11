import React from 'react'

const Card = ({children}) => {
  return (
    <div className='p-4  rounded-2xl shadow-md'>{children}</div>
  )
}

export default Card