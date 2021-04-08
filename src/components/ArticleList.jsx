import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "",
    sort_by: "votes",
  };

  setSortBy = (new_sort_by) => {
    this.setState({ sort_by: new_sort_by });
  };

  getArticles = () => {
    const { sort_by } = this.state;
    const { topic } = this.props;

    api.fetchArticles(sort_by, topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort_by } = this.state;

    if (topic !== prevProps.topic || sort_by !== prevState.sort_by) {
      this.getArticles();
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="ArticleList-container">
        <p>Sorting by:</p>
        <button
          onClick={() => {
            this.setSortBy("votes");
          }}
        >
          Votes
        </button>
        <button
          onClick={() => {
            this.setSortBy("created_at");
          }}
        >
          Date
        </button>
        <button
          onClick={() => {
            this.setSortBy("comment_count");
          }}
        >
          Comment count
        </button>

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
