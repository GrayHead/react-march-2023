import React from 'react';
import {Link, Outlet} from "react-router-dom";

const ChildPage2 = () => {
    return (
        <div>
            child page 2
            <ul>
                <li><Link to={`sub1`} state={{some: 'value1'}}>sub 1</Link></li>
                <li><Link to={`sub2`} state={{some: 'value2'}}>sub 2</Link></li>
            </ul>

            <hr/>
            <Outlet/>

        </div>
    );
};

export default ChildPage2;
