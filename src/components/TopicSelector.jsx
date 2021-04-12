import React, { Component } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "@reach/router";

class TopicSelector extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="TopicSelector">
        {topics.map(({ slug }) => {
          return (
            <button key={slug} id={slug}>
              <Link to={`/articles/${slug}`}>{slug} </Link>
            </button>
          );
        })}
      </div>
    );
  }
}

export default TopicSelector;
