import { Fade } from "react-awesome-reveal";

import "../css/Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
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
					<Fade className="col-lg-6">
						<div className="progress">
							<span className="skill">
								HTML <i className="val">9 years</i>
							</span>
							<ProgressBar
								animated
								now={90}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								CSS <i className="val">9 years</i>
							</span>
							<ProgressBar
								animated
								now={90}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								JavaScript <i className="val">9 years</i>
							</span>
							<ProgressBar
								animated
								now={90}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								AWS <i className="val">1 year</i>
							</span>
							<ProgressBar
								animated
								now={10}
							/>
						</div>
					</Fade>

					<Fade
						className="col-lg-6"
						delay={200}
					>
						<div className="progress">
							<span className="skill">
								React <i className="val">4 years</i>
							</span>
							<ProgressBar
								animated
								now={40}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								Python <i className="val">4 years</i>
							</span>
							<ProgressBar
								animated
								now={40}
							/>
						</div>

						<div className="progress">
							<span className="skill">
								RestFUL API&apos;s <i className="val">9 years</i>
							</span>
							<ProgressBar
								animated
								now={90}
							/>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Skills;
