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

    api.postCommentToArticle(article_id, newComment).then((postedComment) => {
      this.setState({ comment: "" });
      this.props.updateComments(postedComment);
    });
  };

  render() {
    return (
      <div>
        <form className="CommentPoster" onSubmit={this.submitComment}>
          <label>Add a comment:</label>
          <textarea
            name="comment"
            onChange={this.storeComment}
            value={this.state.comment}
          ></textarea>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default CommentPoster;
