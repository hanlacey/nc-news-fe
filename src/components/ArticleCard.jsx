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
			<Link to={`/article/${article_id}`}>
				{" "}
				<h4>{title} </h4>
			</Link>
			<div id="home">
				<Voter element_id={article_id} votes={votes} element={"article"} />
			</div>

			<div className="ArticleCardBody">
				<p>
					posted by{" "}
					<Link to={`/users/${author}`}>
						<b>{author}</b>
					</Link>{" "}
					in <b>{topic}</b>
				</p>
				<p>at {created_at}</p>
				<Link to={`/article/${article_id}`}>{comment_count} comments</Link>
			</div>
		</div>
	);
};

export default ArticleCard;
