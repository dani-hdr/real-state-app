import Button from "../components/UI/Button";
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-3xl">404 | Not Found</p>
        <Link href='/'><Button color="green">Go to home</Button></Link>
        </div>
  )
}

export default NotFound   