import React from 'react';
import { Link } from 'react-router-dom';

function Logo({width = '100px'}){
    return (
        <div className="flex-shrink-0">
            <Link to='/'>
                <img 
                    src="/Logo.jpg" 
                    alt="Logo"
                    className="border-2 border-[#ffa880dd] rounded-full shadow-[0_0_15px_5px_rgba(255,168,128,0.7)] object-cover"
                    style={{
                        width: width,
                        height: width,
                        minWidth: '40px',
                        minHeight: '40px',
                        maxWidth: '100px',
                        maxHeight: '100px'
                    }}
                />
            </Link>
        </div>
    )
}

export default Logo