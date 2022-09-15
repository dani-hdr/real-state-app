
import {AiFillHeart} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <footer className='bg-white dark:bg-slate-700 z-50 text-sm md:text-lg font-medium py-2 px-6 flex flex-col md:flex-row items-center  justify-center md:justify-between'>
        <div className='flex items-center gap-2'>
            Created with Nextjs & Tailwind & some <AiFillHeart className='text-red-500' size={20}/>
        </div>
        <div>
            Developed by Daniel Heidary
        </div>
    </footer>
    </div>
  )
}

export default Footer