import React,{ PropTypes } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const Auth = ({ match }) => (
    <Router>
        <div>
            <AuthButton/>
            <ul>
                <li><Link to={`${match.url}/public`}>Public Page</Link></li>
                <li><Link to={`${match.url}/protected`}>Protected Page</Link></li>
            </ul>
            <Route path={`${match.url}/public`} component={Public}/>
            <Route path={`${match.url}/login`} component={Login}/>
            <PrivateRoute path={`${match.url}/protected`} component={Protected}/>
        </div>
    </Router>
)

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route {...rest} render={props => {
        return(
        fakeAuth.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: `./login`,
                state: { from: props.location }
            }}/>
        )
    )}}/>
)}

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            fakeAuth.signout(() => history.push('./'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

export default Auth;