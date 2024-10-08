import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import NameLogo from "../../assets/name_logo.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
];

const DropdownMenu = [
  { id: 1, title: "Get a Quote", path: "/get-a-quote" },
  { id: 2, title: "Packaging", path: "/packaging" },
  { id: 3, title: "Career", path: "/career" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-4 px-4 flex items-center justify-between"
      >
        {/* Logo section */}
        <div className="flex-1">
          <img src={NameLogo} alt="Logo" className="h-10 sm:h-12 lg:h-14" />
        </div>
        {/* Menu section for desktop */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative">
                {menu.title === "Services" ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="inline-block py-2 px-4 hover:text-secondary relative group"
                    >
                      <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                      {menu.title}
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md mt-2 py-2 w-48">
                        {DropdownMenu.map((item) => (
                          <li key={item.id}>
                            <a
                              href={item.path}
                              className="block py-2 px-4 hover:bg-gray-100"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={menu.path}
                    className="inline-block py-2 px-4 hover:text-secondary relative group"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button className="primary-btn ml-4">Sign In</button>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden flex items-center">
          {isMobileMenuOpen ? (
            <IoMdClose
              className="text-4xl cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            />
          ) : (
            <IoMdMenu
              className="text-4xl cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Open Menu"
            />
          )}
        </div>
      </motion.div>
      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 right-0 z-40">
          <ul className="flex flex-col items-center py-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="w-full text-center relative">
                {menu.title === "Services" ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="block py-2 px-4 hover:bg-gray-100 w-full text-center"
                    >
                      {menu.title}
                    </button>
                    {isDropdownOpen && (
                      <ul className="flex flex-col items-center py-2 w-full bg-white shadow-md mt-2">
                        {DropdownMenu.map((item) => (
                          <li key={item.id} className="w-full">
                            <a
                              href={item.path}
                              className="block py-2 px-4 hover:bg-gray-100 w-full text-center"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={menu.path}
                    className="block py-2 px-4 hover:bg-gray-100 w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
            <li className="w-full text-center mt-2">
              <button className="primary-btn w-full">Sign In</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
