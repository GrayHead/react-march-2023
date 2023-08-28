import React from 'react';
import UserComponent from "../components/UserComponent";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {

    const users = useLoaderData();


    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     getAllUsers().then(value => setUsers([...value]))
    // }, []);

    return (
        <div>
            {
                users.map(value => <UserComponent data={value} key={value.id}/>)
            }

        </div>
    );
};

export default UsersPage;
