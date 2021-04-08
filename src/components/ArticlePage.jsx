import React, { Component } from "react";
import * as api from "../utils/api";
import CommentPoster from "./CommentPoster";

class ArticlePage extends Component {
  state = { article: {}, comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    Promise.all([
      api.fetchArticleById(article_id),
      api.fetchArticleComments(article_id),
    ]).then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
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
    const { article_id } = this.props;
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
        </section>
        <ul className="article-comments-container">
          <CommentPoster article_id={article_id} />
          <h4>{comment_count} comments</h4>
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
