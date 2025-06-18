"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';




const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
 const [existingBooking, setExistingBooking] = useState([]);
   const [_, setHasMounted] = useState(false);


  useEffect(() => {
        setHasMounted(true);

    const stored = localStorage.getItem("myBookings");
    if (stored) {
     
        setExistingBooking(JSON.parse(stored));
      
    }
  }, []);


const navItems = [
  { name: 'Hem', path: '/' },
  { name: 'Piercing med nål', path: '/needle-piercing' },
  { name: 'Öronhåltagning med pistol', path: '/gun-piercing' },
  { name: 'Micro Needling', path: '/microneedling' },
  { name: 'Lash Lift', path: '/lash-lift' },
  { name: 'Herrklippning', path: '/herrfrisyr' },
  { name: 'Om oss', path: '/about' },
  // { name: 'Book', path: '/booking' },
  { name: 'Bloggar', path: '/blog' },
  ...(existingBooking.length > 0
    ? [{ name: 'Mina bokningar', path: '/my-bookings' }]
    : []),
];


  const linkClass = (path) =>
    `block px-4 py-2 text-base font-medium rounded-md ${
      pathname === path
        ? 'text-primary font-bold'
        : ' hover:text-primary'
    }`;

  return (
    <header className="w-full shadow-sm text-white ">
      <div className="navbar max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
       

          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10">
              <Image
                src="/klippsodermalm.png"
                alt="klippsodermalm"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex gap-2">
          {navItems.map((item,idx) => (
            <Link
              key={idx}
              href={item.path}
              className={linkClass(item.path)}
              aria-label={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex">
          <Link href="/contact-us">
            <button className="px-4 py-1 btn-primary btn text-white rounded-full shadow hover:opacity-90 transition">
              Kontakt
            </button>
          </Link>
        </div>

        <button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden p-2"
  aria-label="Toggle Menu"
>
  <AnimatePresence mode="wait">
    {isOpen ? (
      <motion.svg
        key="close"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </motion.svg>
    ) : (
      <motion.svg
        key="hamburger"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </motion.svg>
    )}
  </AnimatePresence>
</button>

      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-full bg-background shadow-lg z-50 p-5 flex flex-col gap-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end"
                aria-label="Close Menu"
              >
                ✕
              </button>

              {/* Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={linkClass(item.path)}
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA on mobile */}
              <Link href="/contact-us">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-4 px-4 py-2 btn-primary btn text-white rounded-full shadow hover:opacity-90 transition"
                >
                  Kontakt
                </button>
              </Link>
            </motion.div>

            {/* Overlay */}
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
