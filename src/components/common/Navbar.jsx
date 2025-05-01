'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = (path) =>
    ` rounded-md ${
      pathname === path
        ? 'text-primary font-bold '
        : 'hover:text-primary hover:text-base-200'
    }`;

  return (
    <div className="">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Mobile drawer button */}
        <div className="navbar-start ">
          <button
         
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/" className="btn btn-ghost text-xl">
            Klipp
          </Link>
        </div>

    

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={linkClass(item.path)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="navbar-end">
          <Link href="/contact">
            <button className="px-4 py-1 btn-primary text-white rounded-full">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-base-100 shadow-md p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)} // Close on click
              className={`block ${linkClass(item.path)}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
