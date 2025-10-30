import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
    }

    return (
        <button 
            className='inline-block px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-[13px] sm:text-xs md:text-sm lg:text-base duration-200 hover:bg-red-600 rounded-full bg-red-500 text-white font-semibold whitespace-nowrap'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn