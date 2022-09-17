import Link from "next/link";
import { BsHouseFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Container from "../UI/Container";
import { useState,useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [navbar , setNavbar] = useState(false)

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 70){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
    window.addEventListener('scroll' ,onScroll )

    return () =>{
      window.removeEventListener('scroll', onScroll)
    }
  },[])
  const stickyHeaderHandler = ()=>{
    window.addEventListener("scroll" ,)
  }
  return (
    <header className={`mb-10 z-40  transition ${navbar ? 'bg-white dark:bg-slate-800 sticky shadow-md top-0' : ''} `}>
      <Container>
        <div className="flex py-4 justify-between items-center">
          <div className="flex items-center">
            <div className="flex text-black dark:text-[#fff] text-2xl md:text-3xl font-bold">
              <Link href="/"><BsHouseFill size={30} className="text-blue mb-1 mr-2" /></Link>
              <span className="hidden sm:block"><Link href="/">RealEstate</Link></span>
            </div>
          </div>
          <nav
            className={`fixed z-50 lg:mx-auto lg:relative bg-white dark:bg-slate-800 lg:dark:bg-transparent lg:bg-transparent lg:shadow-none shadow-lg transition ${
              showMenu ? "translate-x-0" : "-translate-x-96"
            } lg:transform-none ease left-0 bottom-0 z-50 top-0 lg:p-0 px-4 py-4 `}
          >
            <ul className="flex flex-col lg:flex-row  items-start lg:items-center lg:m-0 mt-10 gap-10 xl:gap-16 text-black dark:text-slate-400 font-medium ">
              <li onClick={()=> setShowMenu(false)}  className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link   href="/">Search</Link>
              </li>
              <li onClick={()=> setShowMenu(false)} className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/about">About</Link>
              </li>
              <li onClick={()=> setShowMenu(false)} className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/help">Help</Link>
              </li>
              <li onClick={()=> setShowMenu(false)} className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/agents">Real Estate Agents</Link>
              </li>
              <li onClick={()=> setShowMenu(false)} className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/blog">blog</Link>
              </li>
              <li onClick={()=> setShowMenu(false)} className=" hover:text-blue flex  transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
              <DarkModeToggle
            onChange={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
            checked={theme === 'dark' ? true : false}
            size={65}
          />
              </li>
            </ul>
          </nav>
         
          <Link  href="/create" >
             <a className="py-2 px-4 min-w-min bg-green-500 hover:bg-green-600 font-medium    transition-colors text-white rounded-lg">Submit your estate </a>
            </Link>
          

          <div className=" lg:hidden text-black dark:text-[#fff] cursor-pointer text-4xl">
            {showMenu ? (
              <IoMdClose onClick={() => setShowMenu(false)} />
            ) : (
              <BiMenuAltRight onClick={() => setShowMenu(true)} />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
