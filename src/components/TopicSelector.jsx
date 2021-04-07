import React, { Component } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "@reach/router";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

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
        <ButtonGroup>
          {topics.map(({ slug }) => {
            return (
              <Link key={slug} to={`/articles/${slug}`}>
                <Button id={slug}>{slug}</Button>
              </Link>
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}

export default TopicSelector;
