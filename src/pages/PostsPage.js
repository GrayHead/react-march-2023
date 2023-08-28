import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import PostComponent from "../components/PostComponent";

const PostsPage = () => {
    const posts = useLoaderData();


    return (
        <div>

            <hr/>
            <Outlet/>
            <hr/>
            {
                posts.map((value) => <PostComponent item={value} key={value.id}/>)
            }


        </div>
    );
};

export default PostsPage;
