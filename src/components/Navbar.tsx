import { useState } from 'react';
import droolinghomer from "../assets/droolingHomer.gif";
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollPosition = useScrollPosition()

    function classNames(...classes: (string | undefined | null | boolean)[]) {
        return classes.filter(Boolean).join(' ');
    }

    return(
        <nav className={classNames(
            scrollPosition > 0 ? 'shadow-lg p-1' : 'shadow-none p-4',
            'background-colour fixed top-0 left-0 w-full transition-all',
        )}>
            <div className='flex flex-row items-center justify-between'>
                <div className=''>
                    <a href="#">
                        <img src={droolinghomer} className="h-20 w-auto" alt="Drooling Homer" />
                    </a>
                </div>
                <div className='hidden lg:flex space-x-20 place-self-center'>
                    <a href="#about">About Artist</a>
                    <a href="#shop">Shop</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className=''>
                    <a href="#">
                        <img src={droolinghomer} className="h-20 w-auto" alt="Drooling Homer" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <a href="#about">About Artist</a>
                <a href="#shop">Shop</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
