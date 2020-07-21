import React from 'react';
//import withRouter from 'react-router-dom';

import './Post.css';

const post = (props) => {
    return (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    );
}

export default post;
//export default withRouter(post);
/**
 * withRouter adds these props to other components, to any component we wrap with it.
 * This is a nice way of making that component route aware and it will use or it will get the props containing information for the nearest loaded route.
 * So in this case since post is included in posts, we get the same props as we receive in posts.
 */