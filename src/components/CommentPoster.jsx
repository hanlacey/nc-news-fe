import React, { Component } from "react";
import * as api from "../utils/api";
class CommentPoster extends Component {
  state = {
    comment: "",
  };

  storeComment = (event) => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  submitComment = (event) => {
    event.preventDefault();
    const { article_id } = this.props;
    const newComment = { author: "jessjelly", body: this.state.comment };
    api.postCommentToArticle(article_id, newComment).then((comment) => {
      console.log(comment);
    });
  };

  render() {
    return (
      <div>
        <form className="CommentPoster" onSubmit={this.submitComment}>
          <label>Add a comment:</label>
          <textarea name="comment" onChange={this.storeComment}></textarea>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default CommentPoster;
