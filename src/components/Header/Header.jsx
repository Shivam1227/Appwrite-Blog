import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const location = useLocation();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-white w-full'>
            <nav className='flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12'>
                <div className='flex-shrink-0'>
                    <Logo width='50px' />
                </div>
                <ul className='flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end'>
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className={`inline-block px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-[13px] sm:text-xs md:text-sm lg:text-base duration-200 hover:bg-blue-100 rounded-full whitespace-nowrap
                                        ${location.pathname === item.slug ? "bg-blue-100" : ""}
                                    `}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;