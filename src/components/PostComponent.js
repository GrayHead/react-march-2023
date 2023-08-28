import React from 'react';
import {Link} from "react-router-dom";

const PostComponent = ({item}) => {
    return (
        <div>
            <Link to={`${item.id}`} state={{id:item.id}}>{item.title}</Link>

        </div>
    );
};

export default PostComponent;
