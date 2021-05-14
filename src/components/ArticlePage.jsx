import React, { Component } from "react";
import * as api from "../utils/api";
import CommentPoster from "./CommentPoster";
import Voter from "./Voter";
import { Link } from "@reach/router";

class ArticlePage extends Component {
	state = { article: {}, comments: [], isLoading: true };

	componentDidMount() {
		const { article_id } = this.props;
		this.getArticle(article_id);
		this.getComments(article_id);
	}

	getArticle = (article_id) => {
		api.fetchArticleById(article_id).then((article) => {
			this.setState({ article });
		});
	};

	getComments = (article_id) => {
		api.fetchArticleComments(article_id).then((comments) => {
			this.setState({ comments, isLoading: false });
		});
	};

	displayNewComment = (newComment) => {
		this.setState((currState) => {
			return {
				comments: [newComment, ...currState.comments],
			};
		});
		this.getArticle(this.state.article.article_id);
	};

	deleteComment = (comment_id) => {
		api.deleteComment(comment_id).then(() => {
			this.getComments(this.props.article_id);
			this.getArticle(this.state.article.article_id);
		});
	};

	render() {
		const { article, comments, isLoading } = this.state;
		const {
			author,
			body,
			comment_count,
			created_at,
			title,
			topic,
			votes,
		} = article;
		const { article_id } = this.props;
		if (isLoading) {
			return <p>Loading...</p>;
		} else {
			return (
				<div className="ArticlePage">
					<section className="FullArticle">
						<h2>{title}</h2>
						<h4>
							Posted by <Link to={`/users/${author}`}>{author}</Link> on{" "}
							{created_at} to {topic}
						</h4>
						<div id="text-wrapper">
							<p id="body">{body}</p>
						</div>
					</section>
					<div id="article-page">
						<Voter element_id={article_id} votes={votes} element="article" />
					</div>
					<div className="article-comments-container">
						<CommentPoster
							displayNewComment={this.displayNewComment}
							article_id={article_id}
						/>
						<h4>{comment_count} comments</h4>
						{comments.map((comment) => {
							const { author, comment_id, body, created_at, votes } = comment;
							return (
								<div className="CommentCard" key={comment_id}>
									<p>
										<Link to={`/users/${author}`}>{author}</Link> at{" "}
										{created_at}:
									</p>
									<p>{body}</p>
									<Voter
										element_id={comment_id}
										votes={votes}
										element="comment"
									/>{" "}
									{author === "jessjelly" ? (
										<div id="yourComment">
											<button
												onClick={() => {
													this.deleteComment(comment_id);
												}}
											>
												Delete comment
											</button>
										</div>
									) : (
										<div id="notYourComment"></div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			);
		}
	}
}

export default ArticlePage;
