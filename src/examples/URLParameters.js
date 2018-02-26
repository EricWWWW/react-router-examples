import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const URL = ({match}) => (
    <Router>
        <div>
            <h2>账号</h2>
            <ul>
                <li><Link to={`${match.url}/eric`}>eric</Link></li>
                <li><Link to={`${match.url}/jake`}>jake</Link></li>
            </ul>
            <Route path={`${match.url}/:name`} component={Name}></Route>
        </div>
    </Router>
);

const Name = ({ match }) => (
    <div>
        <h3>Name: {match.params.name}</h3>
    </div>
)

export default URL;