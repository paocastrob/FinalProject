import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/jobPosting.scss";
import { JobPostingForm } from "./../component/jobPostingForm";

export const JobPosting = () => {
	return (
		<div className="jobPosting-container d-flex justify-content-center">
			<JobPostingForm />
		</div>
	);
};
