import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useLogoutMutation} from "myAuth/authApi"
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Navbar = () => {
    const [logout, ]=useLogoutMutation()
const {user}  =     useSelector<RootState, any>(state => state.auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// const {user}= useSelector<RootState, any>((state:RootState) => state.auth)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
// const navigate = useNavigate()


  return (
    <nav className="bg-blue-900 text-white p-4 flex items-center justify-between shadow-lg">
      <div className="text-2xl font-bold">{user && user.name}</div>

      <div className={`flex-col md:flex-row md:flex gap-6 items-center ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
        {/* <Link  to="/profile" className="hover:text-blue-300 transition duration-300 ease-in-out glow-on-hover">Profile</Link> */}
        <Link  to="/todo" className="hover:text-blue-300 transition duration-300 ease-in-out glow-on-hover">Todos</Link>
       
      </div>
 <div className='flex gap-2'>
<button title='logout' type='button' className='p-2 bg-white mx-5 text-black rounded-lg' onClick={e=> logout()}>Logout</button>
 <button type='button' title='button' className="md:hidden flex flex-col items-center justify-center w-8 h-8" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

 </div>
    </nav>
  );
};

export default Navbar;
