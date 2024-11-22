import logo from '../assets/logo.jpg';
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Navbar = () => {
  return <>
  
  <nav className="  mb-20 flex items-center justify-between py-6 ">
<div className="flex flex-shrink-0 items-center ml-8">
    <img src={logo} alt="logo" className='bg-black rounded-full w-[130px]  ' />
</div>
    <div className='m-8  w-[100%] flex  items-center justify-end gap-4 text-2xl '>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
    </div>
  </nav>
  </>
}

export default Navbar
