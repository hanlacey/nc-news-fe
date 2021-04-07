import React, { Component } from "react";
import { fetchArticleById, fetchArticleComments } from "../utils/api";

class ArticlePage extends Component {
  state = { article: {}, comments: [], isLoading: true };

  componentDidMount() {
    fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    });
    fetchArticleComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }
  render() {
    const { article, comments } = this.state;
    const {
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes,
    } = article;
    return (
      <div className="ArticlePage">
        <section className="article-content">
          {" "}
          <h2>{title}</h2>
          <h4>
            Posted by {author} on {created_at} to {topic}
          </h4>
          <h4>{votes} votes</h4>
          <p>{body}</p>
          <h4>{comment_count} comments</h4>
        </section>
        <ul className="article-comments-container">
          {comments.map((comment) => {
            return (
              <div id="comment-card">
                <p>
                  {comment.author} at {comment.created_at}:
                </p>
                <p>{comment.body}</p>
                <p>{comment.votes} votes</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlePage;

//sort by
