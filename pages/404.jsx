
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-3xl">404 | Not Found</p>
        <Link  href="/" >
             <a className="py-2 px-4 min-w-min bg-green-500 hover:bg-green-600 font-medium    transition-colors text-white rounded-lg">Go Home</a>
            </Link>
        </div>
  )
}

export default NotFound   