import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom"; 
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div
      className={`navbar mx-auto max-w-screen-2xl container px-5 md:px-5 sticky top-0 left-0 right-0 z-50 w-full min-w-full${
        isScrolled ? "bg-green-100 backdrop-blur-lg" : "bg-base-100"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/explores">Explore</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {authUser ? <li><Link to="/profile">Profile</Link></li>:null}
            <li>
            <Link to="/journeys">Journeys</Link>
            </li>
            <li>
            <Link to="/contacted">Contacted</Link>
            </li>
            
          </ul>
        </div>
        <a className="text-xl font-bold cursor-pointer text-green-500">ShareExps</a>
      </div>
      <div className="navbar-end space-x-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to="/explores">Explore</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {authUser ? <li><Link to="/profile">Profile</Link></li>:null}
            <li>
            <Link to="/journeys">Journeys</Link>
            </li>
            <li>
            <Link to="/contacted">Contacted</Link>
            </li>
            
          </ul>
        </div>
        <div className="space-x-1">
          {authUser ? <Logout></Logout> : 
           <button
           className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500"
           onClick={() => document.getElementById("my_modal_3").showModal()}
         >
           Login
         </button>
          }<Login></Login>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
