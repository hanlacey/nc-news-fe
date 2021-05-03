import React, { Component } from "react";
import * as api from "../utils/api";

class UserProfile extends Component {
	state = { user: {}, userArticles: [] };

	getUser = () => {
		api.fetchUserByUsername.then((user) => {
			this.setState({ user });
		});
	};

	getUserArticles = () => {
		api.fetchArticlesByUsername.then((articles) => {
			this.setState({ articles });
		});
	};

	render() {
		return <div></div>;
	}
}

export default UserProfile;
