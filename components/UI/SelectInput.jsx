

const SelectInput = ({children , ...rest}) => {
  return (
    <div className='flex flex-grow relative min-w-min justify-center  items-center rounded-lg text-black font-medium text-sm  bg-white dark:bg-slate-700 dark:text-[#fff] py-4 px-5'>
           <select  {...rest} className='w-full  bg-transparent focus:outline-none dark:bg-slate-700'>
            {children}
            </select> 
    </div>
  )
}

export default SelectInput