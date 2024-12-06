import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { Menu, X } from 'lucide-react';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/contact',
    }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <img
                            src="https://avatars.githubusercontent.com/u/99380793?s=400&u=26b98a1fde811b10ca9e111f5df57688c951ef0f&v=4"
                            alt="logo"
                            height="40px"
                            width="40px"
                            className='bg-white-500 rounded-full'
                        />
                    </span>
                    <span className="header_heading text-white">Akshay Bhaltilak</span>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? 'text-orange-600 font-bold' : 'text-white'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 font-semibold`
                                    } to={item.href}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <Link to="/coffee">
                        <button className="coffee_btn">
                            <img src="https://cdn-icons-png.flaticon.com/256/12125/12125073.png" alt="Coffee Icon" />
                            Buy me a coffee
                        </button>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/128/15686/15686981.png"
                                                alt="logo"
                                                height="40px"
                                                width="40px"
                                            />
                                        </span>
                                        <span className="font-bold text-black">Akshay Bhaltilak</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6 text-black" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({ isActive }) =>
                                                    `block py-2 pr-4 pl-3 duration-200 border-b
                                                ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                                }
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                                <Link to="/coffee">
                                    <button className="coffee_btn">
                                        <img src="https://cdn-icons-png.flaticon.com/256/12125/12125073.png" alt="Coffee Icon" />
                                        Buy me a coffee
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
