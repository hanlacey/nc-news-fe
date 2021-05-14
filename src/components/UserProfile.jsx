import React, { Component } from "react";
import * as api from "../utils/api";

class UserProfile extends Component {
	state = { user: {}, articles: [], isLoading: true };

	getUser = () => {
		api.fetchUserByUsername(this.props.username).then((user) => {
			this.setState({ user });
		});
	};

	getUserArticles = () => {
		api.fetchArticlesByUsername(this.props.username).then((articles) => {
			this.setState({ articles });
			this.setState({ isLoading: false });
		});
	};

	componentDidMount() {
		this.getUser();
		this.getUserArticles();
	}

	userArticleList = () => {};
	render() {
		const { isLoading, articles } = this.state;
		const { username, name, avatar_url } = this.state.user;
		console.log(articles);
		return isLoading ? (
			<div>Loading</div>
		) : (
			<div className="UserProfile">
				<div id="bio">
					<p>
						{name} : {username}
					</p>
					<img src={avatar_url} alt="avatar" />
				</div>

				<div id="article-list">
					<p>{username}'s articles</p>
					{articles.map((article) => {
						return (
							<div id="article-wrapper">
								<div id="user-article">
									{article.title} in {article.topic}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default UserProfile;
