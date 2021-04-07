import React, { Component } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "",
  };

  componentDidMount() {
    const topic = this.props.topic;

    if (topic) {
      fetchArticlesByTopic(topic).then((articles) => {
        this.setState({ articles, isLoading: false, topic });
      });
    } else {
      fetchArticles().then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  componentDidUpdate() {
    const topic = this.props.topic;
    fetchArticlesByTopic(topic).then((articles) => {
      if (topic && this.state.topic !== topic) {
        this.setState({ articles, isLoading: false, topic });
      }
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="ArticleList-container">
        <ul className="ArticleList ">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            articles.map((article) => {
              const {
                article_id,
                author,
                title,
                topic,
                created_at,
                votes,
                comment_count,
              } = article;
              //refactor pass whole article then destructure from props?
              //spread props?
              return (
                <ArticleCard
                  key={article_id}
                  article_id={article_id}
                  author={author}
                  title={title}
                  topic={topic}
                  created_at={created_at}
                  votes={votes}
                  comment_count={comment_count}
                />
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
