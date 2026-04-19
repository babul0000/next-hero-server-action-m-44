import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur-lg">
            <div className="flex h-16 items-center justify-between px-6">

                {/* Left Side */}
                <div className="flex items-center gap-3">
                    <span className="font-bold text-xl">ACME</span>
                </div>

                {/* Right Side */}
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="/" className="hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/task" className="hover:text-blue-500">
                            Pricing
                        </Link>
                    </li>
                    
                </ul>

                <div>
                    <ThemeSwitch/>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;