import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.js";
import "../css/Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<section
			id="skills"
			className="skills section-bg"
		>
			<div className="container">
				<div className="section-title">
					<h2>Skills</h2>
					<p className="summary">
						These are some of the skills I am most familiar and comfortable
						with.
					</p>
				</div>

				<div className="row skills-content">
					<div
						className="col-lg-6"
						data-aos="fade-up"
					>
						<div className="progress">
							<span className="skill">
								HTML <i className="val">100%</i>
							</span>
							<ProgressBar
								animated
								now={100}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								CSS <i className="val">100%</i>
							</span>
							<ProgressBar
								animated
								now={100}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								JavaScript <i className="val">80%</i>
							</span>
							<ProgressBar
								animated
								now={80}
							/>
						</div>

						{/* <div className="progress">
							<span className="skill">
								AWS <i className="val">10%</i>
							</span>
							<ProgressBar
								animated
								now={10}
							/>
						</div> */}
					</div>

					<div
						className="col-lg-6"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="progress">
							<span className="skill">
								React <i className="val">60%</i>
							</span>
							<ProgressBar
								animated
								now={60}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								Python <i className="val">90%</i>
							</span>
							<ProgressBar
								animated
								now={90}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								RestFUL API&apos;s <i className="val">70%</i>
							</span>
							<ProgressBar
								animated
								now={70}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
