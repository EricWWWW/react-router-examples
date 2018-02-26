import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

const NoMatch = ({ match }) => (
    <Router>
        <div>
            <ul>
                <li><Link to={`${match.url}/`}>Home</Link></li>
                <li><Link to={`${match.url}/old-match`}>Old Match, to be redirected</Link></li>
                <li><Link to={`${match.url}/will-match`}>Will Match</Link></li>
                <li><Link to={`${match.url}/will-not-match`}>Will Not Match</Link></li>
                <li><Link to={`${match.url}/also/will/not/match`}>Also Will Not Match</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.url}/`} exact component={Home}/>
                <Redirect from={`${match.url}/old-match`} to={`${match.url}/will-match`}/>
                <Route path={`${match.url}/will-match`} component={WillMatch}/>
                <Route component={NoMatch404}/>
            </Switch>
        </div>
    </Router>
)

const Home = () => (
    <p>
        A <code>&lt;Switch></code> renders the
        first child <code>&lt;Route></code> that
        matches. A <code>&lt;Route></code> with
        no <code>path</code> always matches.
    </p>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch404 = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

export default NoMatch