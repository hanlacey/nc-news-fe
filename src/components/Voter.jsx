import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
	state = {
		voteChanges: 0,
	};

	updateVotes = (element_id, vote, element) => {
		this.setState((currentState) => {
			return {
				voteChanges: currentState.voteChanges + vote,
			};
		});
		api.patchVotes(element_id, vote, element);
	};

	render() {
		const { element_id, votes, element } = this.props;
		const { voteChanges } = this.state;
		return (
			<div className="Voter">
				<button onClick={() => this.updateVotes(element_id, -1, element)}>
					-
				</button>
				{votes + voteChanges} votes
				<button onClick={() => this.updateVotes(element_id, 1, element)}>
					+
				</button>
			</div>
		);
	}
}

export default Voter;
