import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="bg-blue-400">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          <div>
          <Link to="/" className="text-white text-2xl font-bold cursor-pointer">
          JSONPlaceholder App
        </Link>
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-blue-400 md:min-h-fit min-h-[60vh] left-0 ${
              isOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link className="hover:text-gray-200 text-white" to="/posts">
                  Posts
                </Link>
              </li>

              <li>
                <Link className="hover:text-gray-200 text-white" to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:hidden">
            <IonIcon
              icon={isOpen ? closeOutline : menuOutline}
              onClick={toggleMenu}
              className="text-3xl text-white cursor-pointer"
            />
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;