import React, {useEffect, useState} from 'react';
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components';
import authService from '../appwrite/auth';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
        } else {
            setPosts([]);
        }
    }, [authStatus]);


    const user = authService.getCurrentUser();

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 justify-center">
                                {authStatus ?  "No posts Available" : "Login to read posts"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
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

export default Home;