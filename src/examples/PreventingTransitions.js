import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom'

const PreventingTransitions = ({ match }) => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/`}>Form</Link>
                </li>
                <li>
                    <Link to={`${match.url}/one`}>One</Link>
                </li>
                <li>
                    <Link to={`${match.url}/two`}>Two</Link>
                </li>
            </ul>
            <Route path={`${match.url}/`} exact component={Form} />
            <Route path={`${match.url}/one`} render={() => <h3>One</h3>} />
            <Route path={`${match.url}/two`} render={() => <h3>Two</h3>} />
        </div>
    </Router>
)

class Form extends React.Component {
    state = {
        isBlocking: false
    }
    render(){
        const { isBlocking } = this.state;

        return (
            <form onSubmit={event => {
                event.preventDefault();
                event.target.reset();
                this.setState({
                    isBlocking:false
                })
            }}>
                <Prompt
                    when={ isBlocking }
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
                <p>
                    Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
                </p>

                <p>
                    <input
                        size="50"
                        placeholder="type something to block transitions"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.length > 0
                            })
                        }}
                    />
                </p>

                <p>
                    <button>Submit to stop blocking</button>
                </p>

            </form>
        )
    }
}

export default PreventingTransitions;