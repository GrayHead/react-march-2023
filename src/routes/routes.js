import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import UsersPage from "../pages/UsersPage";
import {fetchUserPosts, getAllUsers} from "../services/users.api.service";
import ChildPage1 from "../pages/ChildPage1";
import ChildPage2 from "../pages/ChildPage2";
import Sub1 from "../pages/Sub1";
import Sub2 from "../pages/Sub2";
import React from "react";
import UserPosts from "../pages/UserPosts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers,
            },
            {path: 'users/:id', element: <UserPosts/>, loader: fetchUserPosts},
            {
                path: 'child1',
                element: <ChildPage1/>
            },
            {
                path: 'child2',
                element: <ChildPage2/>,
                children: [
                    {
                        path: 'sub1',
                        element: <Sub1/>
                    },
                    {
                        path: 'sub2',
                        element: <Sub2/>
                    }
                ],

            },

        ]

    }
]);
