import React, { useState } from 'react';
import appwriteService from "../appwrite/config.js"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const [imageError, setImageError] = useState(false);
    
    const imageUrl = featuredImage 
        ? appwriteService.getFilePreview(featuredImage)
        : null;

    return (
        <Link to={`/post/${$id}`} className="block h-full">
            <div className='w-full bg-white rounded-xl p-4 h-full flex flex-col'>
                {/* Fixed height image container */}
                <div className='w-full mb-4 overflow-hidden rounded-xl' style={{ height: '240px' }}>
                    {imageUrl && !imageError ? (
                        <img 
                            src={imageUrl} 
                            alt={title}
                            className='w-full h-full object-cover'
                            onError={(e) => {
                                console.error('Image failed to load:', featuredImage);
                                setImageError(true);
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold text-center'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard