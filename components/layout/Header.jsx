import Link from "next/link";
import { BsHouseFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Container from "../UI/Container";
import Button from "../UI/Button";
import { useState } from "react";
import {useTheme} from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {theme,setTheme} = useTheme();
  
  console.log(theme)
  return (
    <header className="mb-10">
      <Container>
        <div className="flex  pt-8 justify-between items-center">
          <div className="flex items-center">
            <BsHouseFill size={30} className="text-blue mb-1 mr-2" />
            <span className="text-black dark:text-[#fff] text-2xl md:text-3xl font-bold">
              <Link href="/">RealEstate</Link>
            </span>
          </div>
          <nav
            className={`absolute lg:mx-auto lg:relative bg-white dark:bg-slate-800 md:dark:bg-transparent lg:bg-transparent lg:shadow-none shadow-lg transition ${
              showMenu ? "translate-x-0" : "-translate-x-96"
            } lg:transform-none ease left-0 bottom-0 z-50 top-0 lg:p-0 px-4 py-4 `}
          >
            <ul className="flex flex-col lg:flex-row  items-start lg:m-0 mt-10 gap-16 text-black dark:text-slate-400 dark:text-slate-400 font-medium ">
              <li className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/">Search</Link>
              </li>
              <li className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/help">Help</Link>
              </li>
              <li className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/agents">Real Estate Agents</Link>
              </li>
              <li className="hover:text-blue transition-colors decoration-2 decoration-blue hover:underline cursor-pointer  underline-offset-8 ">
                <Link href="/blog">blog</Link>
              </li>
            </ul>
          </nav>
          <DarkModeSwitch
      style={{ marginRight: '1rem' }}
      checked={theme==='dark' ? true : false}
      onChange={()=> setTheme(theme==='dark' ? 'light' : 'dark')}
      size={40}
    />
          <div >
            <Link href="/create">
              <Button color="green" link>
                Add your esate
              </Button>
            </Link>
          </div>
          
         
          <div className="lg:hidden text-black dark:text-[#fff] cursor-pointer text-4xl">
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
