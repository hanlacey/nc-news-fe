import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    voteChanges: 0,
  };

  updateArticleVotes = (article_id, vote, element) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + vote,
      };
    });
    api.patchVotes(article_id, vote, element);
  };

  render() {
    const { article_id, votes } = this.props;
    const { voteChanges } = this.state;
    return (
      <div>
        <button
          onClick={() => this.updateArticleVotes(article_id, 1, "article")}
        >
          +
        </button>
        {votes + voteChanges} votes
        <button
          onClick={() => this.updateArticleVotes(article_id, -1, "article")}
        >
          -
        </button>
      </div>
    );
  }
}

export default Voter;
