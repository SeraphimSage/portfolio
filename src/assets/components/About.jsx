import { Fade } from "react-awesome-reveal";
import * as Icon from "react-bootstrap-icons";
import "../css/About.css";
import Headshot from "../img/headshot.png";
const About = () => {
	return (
		<section
			id="about"
			className="about"
		>
			<div className="content">
				<div className="section-title">
					<h2>About</h2>
					<p className="summary">
						I&apos;m a dynamic Web Developer with a solid reputation for
						creative and collaborative implementations of cutting-edge web
						applications. Focused on full-system support to enhance team
						efficiency and reduce operations time. My experience has primarily
						been working with startups and non-profits. In these roles I oversaw
						the development of the organizations online presence, and developed
						long term strategy to help the respective organizations achieve
						their long term growth targets.
					</p>
					<h3>Business Consultant &amp; Full-Stack Web Developer.</h3>
					<div className="row">
						<Fade className="col-lg-4">
							<img
								src={Headshot}
								className="img-fluid"
								alt="personal headshot on white background"
							/>
						</Fade>
						<Fade className="col-lg-8 pt-4 pt-lg-0 content">
							<div className="row">
								<div className="col-lg-6">
									<ul>
										{/* <li>
									<Icon.ChevronRight />
									<strong>Website: </strong>
									<span>
										<a href="https://www.seraphicindustries.net">
											www.seraphicindustries.net
										</a>
									</span>
								</li> */}
										<li>
											<Icon.ChevronRight />
											<strong>City: </strong> <span>Tulsa, OK</span>
										</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<ul>
										<li>
											<Icon.ChevronRight />
											<strong>Degree: </strong> <span>Bachelor</span>
										</li>
										<li>
											<Icon.ChevronRight />
											<strong>Email: </strong>
											<span>kenneth.pinkerton90@gmail.com</span>
										</li>
										<li>
											<Icon.ChevronRight />
											<strong>Freelance: </strong> <span>Available</span>
										</li>
									</ul>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<h3>Goals</h3>
										<p className="goals">
											My overall career goals are to grow my business into the
											space sector and continue my education to gain a Masters
											in Space Systems Engineering.
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<h3>Hobbies</h3>
										<p className="goals">
											When I&apos;m not working, I enjoy spending time with my
											family and friends, playing video games, practicing
											martial arts, cooking, or hiking.
										</p>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
