import React from 'react';
import { useParams } from 'react-router';

function SinglePost(){
    let {postId} = useParams();
    return(
        <h1>{postId}</h1>
    );
}

export default SinglePost;