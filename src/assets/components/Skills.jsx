import "./Skills.css";
const Skills = () => {
	return (
		<section
			id="skills"
			className="skills section-bg"
		>
			<div className="container">
				<div className="section-title">
					<h2>Skills</h2>
					<p>
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
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>

						<div className="progress">
							<span className="skill">
								CSS <i className="val">100%</i>
							</span>
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="100"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>

						<div className="progress">
							<span className="skill">
								JavaScript <i className="val">80%</i>
							</span>
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="80"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
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
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="60"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>

						<div className="progress">
							<span className="skill">
								Python <i className="val">90%</i>
							</span>
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="90"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>

						<div className="progress">
							<span className="skill">
								RestFUL API&apos;s <i className="val">70%</i>
							</span>
							<div className="progress-bar-wrap">
								<div
									className="progress-bar"
									role="progressbar"
									aria-valuenow="70"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
