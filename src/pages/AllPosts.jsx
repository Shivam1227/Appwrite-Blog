import React, {useState, useEffect} from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config"


function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
        });
    }, [])

    return(
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
                    {posts.map((post) => (
                        <PostCard 
                            key={post.$id}
                            {...post}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost