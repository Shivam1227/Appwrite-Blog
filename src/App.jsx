import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)  
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if(userData) {
                    dispatch(login({userData}))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return !loading ? (
        <div className='min-h-screen flex flex-col bg-gray-400 w-full overflow-x-hidden'>
            <Header />
            <main className='flex-1 w-full'>
                <Outlet />
            </main>
            <Footer />
        </div>
    ) : null
}

export default App