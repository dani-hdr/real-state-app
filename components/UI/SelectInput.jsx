

const SelectInput = ({children , ...rest}) => {
  return (
    <div className='flex flex-grow relative min-w-min justify-center  items-center rounded-lg text-black font-medium text-sm  bg-white py-4 px-5'>
           <select {...rest} className='w-full bg-transparent focus:outline-none placeholder:text-gray'>
            {children}
            </select> 
    </div>
  )
}

export default SelectInput