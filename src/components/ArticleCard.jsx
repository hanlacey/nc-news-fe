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

  return (
    <div className="ArticleCard">
      <h4>
        {" "}
        <Link to={`/article/${article_id}`}>{title} comments</Link>
      </h4>
      <p>{votes} votes</p>
      <p>
        posted by {author} in {topic}
      </p>
      <p>at {created_at}</p>
      <Link to={`/article/${article_id}`}>{comment_count} comments</Link>
    </div>
  );
};

export default ArticleCard;
