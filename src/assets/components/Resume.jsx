import { Fade } from "react-awesome-reveal";
import "../css/Resume.css";

const Resume = () => {
	return (
		<section
			id="resume"
			className="resume"
		>
			<div className="container">
				<div className="section-title">
					<h2>Resume</h2>
					<p className="summary">
						I&apos;m a software engineer with a business background. I excel in
						full-stack development and team leadership, driving efficiency and
						innovation to deliver impactful solutions that enhance user
						experiences
					</p>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<Fade>
							<h3 className="resume-title">Sumary</h3>
							<div className="resume-item pb-0">
								<h4>Kenneth Pinkerton</h4>
								<p>
									<em>
										I&apos;m a dynamic Web Developer with a solid reputation for
										creative and collaborative implementations of cutting-edge
										web applications. I focus on full-stack/system support to
										enhance team efficiency and reduce operations time.
									</em>
								</p>
								<ul>
									<li>Tulsa, OK 74135</li>
									<li>kenneth.pinkerton90@gmail.com</li>
								</ul>
							</div>

							<h3 className="resume-title">Education</h3>
							<div className="resume-item">
								<h4>
									Bachelor of Science Business Management: Entrepreneurial
									Management
								</h4>
								<h5>2012 - 2019</h5>
								<p>
									<em>Brigham Young University - Idaho, Rexburg, ID</em>
								</p>
								<p>
									Course studies focused on steps of setting up and running a
									small business, and business testing helpful/required to
									insure the venture is successful. Started multiple businesses
									as part of course studies and adjacent personal ventures from
									lessons learned.
								</p>
							</div>
							<div className="resume-item">
								<h4>Bachelor of Science Computer Science</h4>
								<h5>2022 - present</h5>
								<p>
									<em>Southern New Hampshire University, Manchester, NH</em>
								</p>
								<p>
									Developed proficiency in industry-standard software
									development with popular programming languages such as Python,
									Java and C++. Enhanced experience in full-stack development
									and cloud integration using JavaScript, NoSQL and Amazon Web
									Services (AWS).
								</p>
							</div>
						</Fade>
					</div>
					<div className="col-lg-6">
						<Fade>
							<h3 className="resume-title">Professional Experience</h3>

							<div className="resume-item">
								<h4>Chief Technology Officeer</h4>
								<h5>2023 - 2025</h5>
								<p>
									<em>Marriage List, Tulsa, OK </em>
								</p>
								<ul>
									<li>
										Collaborated with cross-functional teams to ensure seamless
										integration of new technologies, enhancing overall system
										functionality and user satisfaction.
									</li>
									<li>
										Architected and built scalable web applications and database
										systems from the ground up, enhancing performance and user
										experience by reducing load times by 20%.
									</li>
									<li>
										Mentored and trained junior engineers, fostering a culture
										of continuous learning and innovation, which improved team
										competency and retention rates by 25%.
									</li>
								</ul>
							</div>
							<div className="resume-item">
								<h4>Full-Stack Web Developer</h4>
								<h5>2019 - 2020</h5>
								<p>
									<em>Kenzie Academy, Indianapolis, IN </em>
								</p>
								<ul>
									<li>
										Worked as part of a Agile development team through Scrum
										meetings to create web applications tailored to the clients
										specifications.
									</li>
									<li>
										Applications created used a combination of React, HTML, CSS,
										and JavaScript for front-end applications. As well as Python
										on the Django framework, SQL, and PostgreSQL for the back
										end of these applications.
									</li>
									<li>
										During this time, I also helped as both a product owner and
										Scrum master on the development teams I was assigned to.
									</li>
								</ul>
							</div>
							<div className="resume-item">
								<h4>Webmaster {"->"} Chief of Staff</h4>
								<h5>2018 - 2022</h5>
								<p>
									<em>Citizens for Decency, Rexburg, ID</em>
								</p>
								<ul>
									<li>
										Facilitated the growth in attendance and participation of a
										multi-organizational conference that saw a three-fold
										increase from the previous conference and was the largest
										such conference on record with Citizens for Decency (CFD),
										accomplished this through use of new networks, updated
										website design, and work through social media outreach.
									</li>
									<li>
										Demonstrated cool headedness under pressure by
										troubleshooting technical issues on the spot as a live event
										was taking place with over 1000 individuals observing.
									</li>
									<li>
										Drove online traffic to a newly constructed Wix site that
										saw an increase on the average page rank of 55%, using SEO
										tactics, and updating of company digital content and design.
									</li>
									<li>
										Supervised staff and participated in hiring, training, and
										performance evaluations to establish and enforce policies
										and procedures for business functions.
									</li>
									<li>
										Managed business operations while overseeing contractors and
										consultants to best verify on-time completion of key
										deliverables.
									</li>
								</ul>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
