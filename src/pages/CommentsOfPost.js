import React from 'react';
import {useLocation} from "react-router-dom";

const CommentsOfPost = () => {
    const {state: {id}} = useLocation();

    return (
        <div>
            comments of post {id}
        </div>
    );
};

export default CommentsOfPost;
