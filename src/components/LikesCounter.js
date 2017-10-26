import React, { Component } from 'react';
import ActionButton from './ActionButton'

class LikesCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.initialLikes
    };
  }

  modifyLikes(value) {
    this.setState({
      likes: parseInt(this.state.likes) + value
    });
  }

  handleLike() {
    this.modifyLikes(1)
  }

  handleDislike() {
    this.modifyLikes(-1)
  }


  render() {
    return (
      <div>
      <h1>Likes: {this.state.likes}</h1>
      <ActionButton
      text="like +1"
      onClick={this.handleLike.bind(this)} />

      <ActionButton
      text="Dislike -1"
      onClick={this.handleDislike.bind(this)} />

      </div>
        )
  }
}

export default LikesCounter;
