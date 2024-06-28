import { useState } from 'react';
import droolinghomer from "../assets/droolingHomer.gif";
import { useScrollPosition } from '../hooks/useScrollPosition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track scroll postion
    const scrollPosition = useScrollPosition()

    function classNames(...classes: (string | undefined | null | boolean)[]) {
        return classes.filter(Boolean).join(' ');
    }

    const mobileMenuContainer = {
        visible: {
          y: 0,
          transition: {
            y: { velocity: 10 },
            
          }
        },
        hidden: {
          y: -400,
          transition: {
            y: { velocity: 10 },
            
          }
        }
      };

    return(
        <nav className={classNames(
            isMobileMenuOpen ? "drop-shadow-lg pb-80" : "pb-0",
            scrollPosition > 0 ? 'shadow-lg p-1' : 'shadow-none p-4',
            'sm:pb-0 sm:drop-shadow-none text-colour background-colour fixed top-0 left-0 w-full transition-all duration-300',
        )}>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <a href="#">
                        <img src={droolinghomer} className="h-20 w-auto" alt="logo" />
                    </a>
                </div>
                <div className='hidden lg:flex space-x-20 place-self-center'>
                    <a href="#about">About Artist</a>
                    <a href="#shop">Shop</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className='hidden lg:flex'>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black focus:outline-none">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                <motion.div
                initial="hidden"
                animate={isMobileMenuOpen ? "visible" : "hidden"}
                exit="hidden"
                variants={mobileMenuContainer} 
                >
                    <div className='fixed inset-x-0 mx-auto self-center text-2xl space-y-10 mt-10 flex flex-col text-center lg:hidden'>
                        <a href="#about">About Artist</a>
                        <a href="#shop">Shop</a>
                        <a href="#contact">Contact</a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
