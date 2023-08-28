import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            app component

            <ul>
                <li>
                    <Link to={'users'}>users page</Link>
                </li>
                <li>
                    <Link to={'posts'}>posts page</Link>
                </li>
                <li>
                    <Link to={'comments'}>commennts page</Link>
                </li>
            </ul>

            <Outlet/>

        </div>
    );
}

export default App;
