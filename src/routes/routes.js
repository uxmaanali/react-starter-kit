import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/home";

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Home} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Routes);
