import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
it's the file where we actually start our react app 
by mounting it to the dom.
So here, I now also want to import axios from the axios package and all these axios imports actually all share the same configuration.
so that is why we cannot also use axios here and axios is a special interceptor's object.
and again, this will be then shared not only in this file but across all files in your project so it will affect all reqeust sent from anywhere in your app.
 */
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

var myInterceptor = axios.interceptors.response.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
axios.interceptors.request.eject(myInterceptor); // removing interceptors
/** 
the interceptor also ran even though it was fired from a different component.
we can also pass a second function besides that request configuration changing function.
we can add a function which handles any errors.

So being able to define these interceptors
can be quite powerful, again avery common use case is for
the reqeust interceptor to add some common headers for exampe, an authorization header.
Though we also have a different way of accessing global axios configuration.
*/
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
