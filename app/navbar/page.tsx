"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-10 mt-8">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h1 className="titl text-1xl mb-2 text-white bg-grey shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] rounded-md pr-2 pl-2 md:mb-4 md:text-2xl">C. R. E. O.</h1>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/images/circ22.png" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/images/circ.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>  
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="nav pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-[#939faf]  border-white  md:hover:text-[#939faf] md:hover:bg-transparent">
                  <Link href="https:/chrncle.vercel.app/" onClick={() => setNavbar(!navbar)}>
                    OCREON
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;