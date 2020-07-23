import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if (this.props.id) {
            if ( !this.state.loadedPost ||
                (this.state.loadedPost && this.state.loadedPost.id) !== this.props.id) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        console.log(response);
                        this.setState({loadedPost: response.data});
                    });
            }
        }
    } // fetching data is asynchronous, so if you trying to render 
    // before you have a valid loadedPost it occurs error.

    // deleting here will not really delete any data from the backend, it just
    // mirrors back the data we send with our response we get basically.
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });   
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) { // we can simply fix this by adding a check for validity of the id
            post =  <p style={{textAlign: 'center'}}>Loading....</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;