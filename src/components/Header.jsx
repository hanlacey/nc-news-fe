import React from "react";
import { Link } from "@reach/router";
const Header = () => {
	return (
		<Link to="/">
			<header className="Header">
				NC News
				<p>Logged in as jessjelly</p>
			</header>
		</Link>
	);
};
export default Header;
