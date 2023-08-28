import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

const PostsOfUserPage = () => {
    const {state: userFromPreviousPage} = useLocation();
    const posts = useLoaderData();


    return (
        <div>
            <p>
                {JSON.stringify(userFromPreviousPage)}
            </p>
            PostsOfUserPage
            <ul>
                {
                    posts.map(value => <li key={value.id}>{value.title}</li>)
                }
            </ul>

        </div>
    );
};

export default PostsOfUserPage;
