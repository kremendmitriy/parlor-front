'use client';
import { IconImage } from '../icon/icon';
import Link from 'next/link';

export const Footer = () => {
   return (
      <footer className="bg-[#1a1a1a] text-white w-full py-6  ">
         <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
               <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center mb-2">
                     <IconImage
                        src="/images/footer-icons/phone-img.png"
                        alt="Phone"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                     <span className="ml-2">+46733998349</span>
                  </div>
                  <div className="flex items-center">
                     <IconImage
                        src="/images/footer-icons/email-img.png"
                        alt="Email"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                     <span className="ml-2">kremen.dmitriy.web@gmail.com</span>
                  </div>
               </div>

               <div className="w-px h-20 bg-white opacity-20 my-4 md:my-0"></div>

               <div className="flex items-center space-x-4">
                  <Link
                     href="https://www.facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconImage
                        src="/images/footer-icons/facebook-img.png"
                        alt="Facebook"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                  </Link>
                  <Link
                     href="https://twitter.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconImage
                        src="/images/footer-icons/twitter-img.png"
                        alt="Twitter"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                  </Link>
                  <Link
                     href="https://www.instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconImage
                        src="/images/footer-icons/instagram-img.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                  </Link>
                  <Link
                     href="https://www.youtube.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconImage
                        src="/images/footer-icons/youtube-img.png"
                        alt="YouTube"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                  </Link>
                  <Link
                     href="https://telegram.org"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconImage
                        src="/images/footer-icons/telegram-img.png"
                        alt="Telegram"
                        width={32}
                        height={32}
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                  </Link>
               </div>
            </div>
            <div className="flex ml-[35px] items-center justify-center text-sm mt-2">
               <IconImage
                  src="/images/footer-icons/copyright-img.png"
                  alt="Copyright"
                  width={32}
                  height={32}
                  className="mr-2"
               />
               <span>2024 FlintInc. All rights reserved.</span>
            </div>
         </div>
      </footer>
   );
};
