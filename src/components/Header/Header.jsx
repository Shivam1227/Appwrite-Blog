import React from 'react';
// 1. Import useLocation hook
import { useLocation }from 'react-router-dom'; 
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    // Get the current location
    const location = useLocation();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login", // Changed from ./login to /login
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
            slug: "/add-post", // Changed from add-post to /add-post
            active: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-white'>

            <nav className='flex w-full px-4 items-center'>
                <div className='mr-4'>
                    <Logo width='70px' />
                </div>
                <ul className='flex ml-auto items-center'>
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    // 2. Dynamically change button background color
                                    className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full
                                    ${location.pathname === item.slug ? "bg-blue-100" : ""}
                                    `}
                                >{item.name}</button>
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