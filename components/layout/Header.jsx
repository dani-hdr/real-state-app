import Link from "next/link";
import { BsHouseFill } from "react-icons/bs";
import Container from "../UI/Container";
import Button from "../UI/Button";
const Header = () => {
  return (
    <header className="mb-10">
      <Container>
        <div className="flex pt-8 justify-between items-center">
          <div className="flex items-center">
            <BsHouseFill size={30} className="text-blue mb-1 mr-2" />
            <span className="text-black text-3xl font-bold">
              <Link href="/">RealEstate</Link>
            </span>
          </div>
          <nav>
            <ul className="flex gap-16 text-black font-medium ">
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
          <div className="flex items-center">
          <Button color="green"><Link href='/create'>Add your esate</Link></Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
