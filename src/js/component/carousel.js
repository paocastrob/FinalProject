import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Carousel } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { Home } from "../views/home";

// Importing styles*/
import "../../styles/components.scss";

// Declaring variables for photos in carousel
const firstPhoto = "https://i.imgur.com/In2JHMQ.jpg"; //painter 1

const secondPhoto = "https://i.imgur.com/LFisfmm.jpg?1"; //landscaper 1

const thirdPhoto = "https://i.imgur.com/rtLgqLA.jpg?1"; //people smiling 2

// Optional Photos
//https://i.imgur.com/zfGVMgi.jpg - handyman
//https://i.imgur.com/In2JHMQ.jpg - painter 1
//https://i.imgur.com/sq7Kjo4.jpg?1 - painter  2
//https://i.imgur.com/g5WppRD.jpg - people smiling 1
//https://i.imgur.com/rtLgqLA.jpg?1 - people smiling 2
//https://i.imgur.com/LFisfmm.jpg?1 - landscaper 1
//https://i.imgur.com/EpNkP8z.jpg?1 - landscaper 2
//https://i.imgur.com/cLg4VJB.jpg - ironworker

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className="carousel-container d-block w-100">
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{/* First Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={firstPhoto} alt="First slide" />
					<Carousel.Caption>

						<h3>First slide label</h3>
						<p>Nulla vitae elit liber, a pharetra augue mollis interdum.</p>

						<div className="caption-background">
							<h3>Welcome to SuperGig</h3>
							<p>We connect members of your community who need help with a job or are looking to work.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Second Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={secondPhoto} alt="Second slide" />
					<Carousel.Caption>

						<h3>Second slide label</h3>
						<p>Lorem ipsum dolo sit amet, consectetur adipiscing elit.</p>

						<div className="caption-background">
							<h3>Hassle-Free</h3>
							<p>We make the process of finding the right local person for your job easy.</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>

				{/* Third Carousel Item */}
				<Carousel.Item>
					<img className="carousel-img" src={thirdPhoto} alt="Third slide" />
					<Carousel.Caption>
						<div className="caption-background">
							<h3>Growing Community</h3>
							<p>
								With our growing community you will be sure to find the right person for your job or the
								right job for your expertise.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
