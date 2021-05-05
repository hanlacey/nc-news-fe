import React from "react";
import { Link } from "@reach/router";
import { Person } from "react-bootstrap-icons";
const Navbar = () => {
	return (
		<div className="Navbar">
			<p>New post</p>
			<Link to={`/users/jessjelly`}>
				<div id="profile">
					<p>jessjelly</p>
					<Person />
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
