import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
// webpack will include it in the global bundle.
// but we want to load it only when needed.
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost'); // this is a special dynamic import syntax
    // function here will be only executed once we render AyncNewPost to the screen.
}); 

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* This is kind of the same as a href ="/"
                            but react router will create the anchor tag and then prevent default 
                            which would be to send a new request and instead handle that click on itself 

                            It looks exactly like before but now simply react is re-rendering parts of the page which needs to be re-rendered,
                            we're not loading a new page, we're not loading that same page again.
                            Of course when loading the same page again it's still react rendering the javascript to the DOM
                            but we'll actually reload the page whilst doing that and therefore lose our state.

                            Now our state is contained, we don't reload the app
                            and this is the way we should actually navigate around therefore, using the link component.
                            */}
                            <li><NavLink exact
                                         to="/posts/"
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: '#fa932f',
                                             textDecoration: 'underline'
                                         }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Here you define the path for which this route should become active, something like '/',
                then you need to define what should happen when this is the active path 
                So here this function below has to return jsx which should be rendered 
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/new-post" render={() => <h1>Home 2</h1>} />
                Component property value needs to be a reference to the function or class we want to use. 
                
                Switch tells the react router, 'hey please only load one of the routes'.
                We can wrap our three routes with switch and the first route that matches the given path
                will be loaded and thereafter, it will just stop analyzing the routes. 
                It wont render any other routes. */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;