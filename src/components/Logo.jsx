import React from 'react';
import { Link } from 'react-router-dom';

function Logo({width = '100px'}){
    return (
        // Removed 'ml-auto'
        <div>
            <Link to='/'>
                <img 
                    src="/Logo.jpg" 
                    alt="Logo"
                    className="border-2 border-[#ffa880dd] rounded-full shadow-[0_0_15px_5px_rgba(255,168,128,0.7)]"
                    style={{width: width}}
                />
            </Link>
        </div>
    )
}

export default Logo