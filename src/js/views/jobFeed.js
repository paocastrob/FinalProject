import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/jobFeed.scss";

export const JobFeed = () => {
	return (
		<div className="jobFeed-container d-flex justify-content-center">
			<p>This is the job feed view.</p>
		</div>
	);
};
