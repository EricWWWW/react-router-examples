import React from "react";
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

const PEEPS = [
    { id: 0, name: "张三", friends: [1, 2, 3] },
    { id: 1, name: "李四", friends: [0, 3] },
    { id: 2, name: "王五", friends: [0, 1, 3] },
    { id: 3, name: "赵六", friends: [1, 2] }
];

const find = id => PEEPS.find(p => p.id == id);


const RecursivePath = withRouter(
    ({ match }) => (
        <Router>
            <Person match={{ params: { id: 0 },url:match.url}} />
        </Router>
    )
);

const Person = ({ match }) => {
    const person = find(match.params.id);
    console.log(match.url)
    return (
        <div>
            <h3>{ person.name }’s Friends</h3>
            <ul>
                {person.friends.map(id => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.url}/:id`} component={Person} />
        </div>
    );
};

export default RecursivePath;