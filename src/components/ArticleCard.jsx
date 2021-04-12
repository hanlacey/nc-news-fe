import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

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
      <Voter id={article_id} votes={votes} element={"article"} />
      <p>
        posted by {author} in {topic}
      </p>
      <p>at {created_at}</p>
      <Link to={`/article/${article_id}`}>{comment_count} comments</Link>
    </div>
  );
};

export default ArticleCard;
