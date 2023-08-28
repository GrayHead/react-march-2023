import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";

const UserComponent = ({data}) => {
    const navigate = useNavigate();

    return (
        <p onClick={() => {
            navigate(`${data.id}`);
        }}>
            {data.name}
        </p>
    );
};

export default UserComponent;
