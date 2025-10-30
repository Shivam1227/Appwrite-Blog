import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
    return(
        <div className='py-4 sm:py-8'>
            <Container>
                <PostForm/>
            </Container>
        </div>
    )
}

export default AddPost