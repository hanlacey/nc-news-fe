import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  const {
    article_id,
    author,
    title,
    topic,
    created_at,
    votes,
    comment_count,
  } = props;

  const { updateArticleVotes } = props;
  return (
    <div className="ArticleCard">
      <h4>
        {" "}
        <Link to={`/article/${article_id}`}>{title} comments</Link>
      </h4>
      <p>
        <button
          onClick={() => {
            updateArticleVotes(article_id);
          }}
        >
          +
        </button>
        {votes} votes
        <button>-</button>
      </p>
      <p>
        posted by {author} in {topic}
      </p>
      <p>at {created_at}</p>
      <Link to={`/article/${article_id}`}>{comment_count} comments</Link>
    </div>
  );
};

export default ArticleCard;
