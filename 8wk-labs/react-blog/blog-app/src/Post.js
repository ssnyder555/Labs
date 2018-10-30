import React, { Component } from 'react';
// import Comments from './Comments.js';


class Post extends Component {
  render() {
    return (
      <div>
        <h1>Title{this.props.title}</h1>
        <p>By {this.props.author}</p>


      </div>
    );
  }
}

export default Post;
