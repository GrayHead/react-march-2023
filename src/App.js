import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>main page</h1>

            <h3>visit child routes</h3>
            <ul>
                <li><Link to={`users`}>users page</Link></li>
                <li><Link to={`child1`}>child 1</Link></li>
                <li><Link to={`child2`}>child 2</Link></li>
            </ul>


            <Outlet/>


        </div>
    );
}

export default App;
