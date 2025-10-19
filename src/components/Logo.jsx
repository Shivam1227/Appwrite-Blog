import React from 'react';
import { Link } from 'react-router-dom';

function Logo({width = '100px'}){
    return (
        <div className='mr-4'>
            <Link to='/'>
                <img 
                    src="/Logo.jpg" 
                    alt="Logo"
                    className="w-12"
                />
            </Link>
        </div>
    )
}

export default Logo