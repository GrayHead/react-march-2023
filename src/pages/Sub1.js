import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const Sub1 = () => {
    const location = useLocation();
    console.log(location.state);
    const params = useParams();
    console.log(params);

    return (
        <div>
            sub 1
        </div>
    );
};

export default Sub1;
