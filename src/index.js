import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Basic from './examples/Basic';
import URL from './examples/URLParameters';
import Auth from './examples/Auth'
import CustomLink from './examples/CustomLink'
import PreventingTransitions from './examples/PreventingTransitions'
import NoMatch from './examples/NoMatch'
import RecursivePath from './examples/RecursivePath'

import registerServiceWorker from './registerServiceWorker';

const Nav = () => (
    <Router>
        <div>
            <ul>
                <li><h2><Link to={'/basic'}>基本使用</Link></h2></li>
                <li><h2><Link to={'/url'}>URL参数</Link></h2></li>
                <li><h2><Link to={'/auth'}>认证</Link></h2></li>
                <li><h2><Link to={'/customlink'}>自定义链接</Link></h2></li>
                <li><h2><Link to={'/preventing'}>阻止导航</Link></h2></li>
                <li><h2><Link to={'/nomatch'}>未匹配（404）</Link></h2></li>
                <li><h2><Link to={'/recursive'}>路径递归</Link></h2></li>
            </ul>
            <hr/>
            <hr/>
            <Route path={'/basic'} component={Basic}/>
            <Route path={'/url'} component={URL} />
            <Route path={'/auth'} component={Auth} />
            <Route path={'/customlink'} component={CustomLink} />
            <Route path={'/preventing'} component={PreventingTransitions} />
            <Route path={'/nomatch'} component={NoMatch} />
            <Route path={'/recursive'} component={RecursivePath} />
        </div>
    </Router>
);

ReactDOM.render(
    <Nav/>
    , document.getElementById('root')
);
registerServiceWorker();

