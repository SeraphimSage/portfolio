import { Fade } from "react-awesome-reveal";
import * as Icon from "react-bootstrap-icons";
import ToDoGif from "../img/ToDo-App-Demo.gif";
import "../css/Portfolio.css";
const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="portfolio section-bg"
		>
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
					<p className="summary">
						I am a passionate and creative web developer who excels in producing
						responsive, accessible websites that provoke positive user
						interactions. The below examples of projects I have completed that
						show off the extent of my work through various web services,
						showcasing an understanding in both front and backend development as
						well as a commitment to clean succinct code. Every project reflects
						my skills to handle complex problems, using modern technologies and
						being adaptable as web changes.
					</p>
				</div>

				<Fade className="row"></Fade>

				<div className="col-lg-4 col-md-6 portfolio-item filter-web">
					<div className="portfolio-wrap">
						<img
							src={ToDoGif}
							className="img-fluid"
							alt="Animated demonstration of ToDo App"
						/>
						<div className="portfolio-links">
							<a
								href="https://seraphimsage.github.io/todo-app-part-2/"
								className="portfolio-lightbox"
								target="_blank"
								title="App Deployment"
							>
								<Icon.AppIndicator />
							</a>
							<a
								href="https://github.com/SeraphimSage/todo-app-part-2"
								className="portfolio-lightbox"
								target="_blank"
								title="App Repo"
							>
								<Icon.App />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="portfolio-info">
							<h3>Project information</h3>
							<ul>
								<li>
									<strong>Category</strong>: Web design
								</li>
								<li>
									<strong>Client</strong>: Kenzie Academy
								</li>
								<li>
									<strong>Project date</strong>: Feb 15, 2020
								</li>
								<li>
									<strong>Project URL</strong>:
									<a
										href="https://seraphimsage.github.io/todo-app-part-2/"
										target="_blank"
										title="App Deployment"
									>
										https://seraphimsage.github.io/todo-app-part-2/
									</a>
								</li>
								<li>
									<strong>Project Technologies</strong>: React, CSS, HTML
								</li>
							</ul>
						</div>
						<div className="portfolio-description">
							<h2>Project Details</h2>
							<p>
								This project was completed as part of a full-stack web
								development educational course through Kenzie Academy.
							</p>
							<p>
								The purpose of this project is to demonstrate how CRUD (Create,
								Read, Update, and Delete) techniques can be used in creating a web app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
