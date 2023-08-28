import React from 'react';
import {useLoaderData} from "react-router-dom";
import UserComponent from "../components/UserComponent";

const UsersPage = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>

            {

                users.map((user) => {
                    return <UserComponent data={user} key={user.id}/>
                })
            }

        </div>
    );
};

export default UsersPage;
