'use client';
import Link from 'next/link';

export const Header = () => {
   return (
      <header className="fixed top-0 left-0 w-full flex items-center h-24 px-5 bg-[#2b2b2b] z-50 border-8 border-[#808080] border-solid">
         <div className="text-4xl font-bold font-vast-shadow">
            <Link
               href="/"
               className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
            >
               FlintInc
            </Link>
         </div>
         <nav className="ml-auto text-4xl font-viaoda-libre">
            <ul className="flex space-x-5 m-0 p-0 list-none">
               <li>
                  <Link
                     href="/"
                     className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href="/designs"
                     className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
                  >
                     Designs
                  </Link>
               </li>
               <li>
                  <Link
                     href="/artists"
                     className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
                  >
                     Our Artists
                  </Link>
               </li>
               <li>
                  <Link
                     href="/about"
                     className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     href="/contact"
                     className="text-white transition duration-300 ease-in-out hover:text-[#39ff14] hover:text-shadow"
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};
