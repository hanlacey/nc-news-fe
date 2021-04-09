import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    voteChanges: 0,
  };

  updateArticleVotes = (article_id, vote) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + vote,
      };
    });
    api.patchArticleVotes(article_id, vote).then((updatedArticleVoteCount) => {
      console.log(updatedArticleVoteCount);
    });
  };

  render() {
    const { article_id, votes } = this.props;
    const { voteChanges } = this.state;
    return (
      <div>
        <button onClick={() => this.updateArticleVotes(article_id, 1)}>
          +
        </button>
        <p>{votes + voteChanges} votes</p>
        <button onClick={() => this.updateArticleVotes(article_id, -1)}>
          -
        </button>
      </div>
    );
  }
}

export default Voter;
