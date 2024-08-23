import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.js";
import "../css/About.css";
const About = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<section
			id="about"
			className="about"
		>
			<div className="content">
				<div className="section-title">
					<h2>About</h2>
					<p>
						Dynamic Web Developer with a solid reputation for creative and
						collaborative implementations of cutting-edge web applications.
						Focused on full-system support to enhance team efficiency and reduce
						operations time.
					</p>
					<h3>Business Consultant &amp; Full-Stack Web Developer.</h3>
					<div className="row">
						<div
							className="col-lg-4"
							data-aos="fade-right"
						>
							<img
								src="assets/img/Screenshot_20221210_135737_Facebook.webp"
								className="img-fluid"
								alt=""
							/>
						</div>
						<div
							className="col-lg-8 pt-4 pt-lg-0 content"
							data-aos="fade-left"
						></div>
						<div className="col-lg-6">
							<ul>
								<li>
									<i className="bi bi-chevron-right"></i>
									<strong>Website: </strong>
									<span>
										<a href="https://www.seraphicindustries.net">
											www.seraphicindustries.net
										</a>
									</span>
								</li>
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
