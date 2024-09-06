import { Fade } from "react-awesome-reveal";
import "../css/About.css";
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
						Dynamic Web Developer with a solid reputation for creative and
						collaborative implementations of cutting-edge web applications.
						Focused on full-system support to enhance team efficiency and reduce
						operations time.
					</p>
					<h3>Business Consultant &amp; Full-Stack Web Developer.</h3>
					<div className="row">
						<Fade className="col-lg-4">
							<img
								src="../img/headshot.png"
								className="img-fluid"
								alt="personal headshot on white background"
							/>
						</Fade>
						<Fade className="col-lg-8 pt-4 pt-lg-0 content"></Fade>
						<div className="col-lg-6">
							<ul>
								{/* <li>
									<i className="bi bi-chevron-right"></i>
									<strong>Website: </strong>
									<span>
										<a href="https://www.seraphicindustries.net">
											www.seraphicindustries.net
										</a>
									</span>
								</li> */}
								<li>
									<i className="bi bi-chevron-right"></i>
									<strong>City: </strong> <span>Tulsa, OK</span>
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<ul>
								<li>
									<i className="bi bi-chevron-right"></i>
									<strong>Degree: </strong> <span>Bachelor</span>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<strong>Email: </strong>
									<span>kenneth.pinkerton90@gmail.com</span>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<strong>Freelance: </strong> <span>Available</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
