import { Fade } from "react-awesome-reveal";
import * as Icon from "react-bootstrap-icons";

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
							src="../img/ToDo-App-Demo.gif"
							className="img-fluid"
							alt="Animated demonstration of ToDo App"
						/>
						<div className="portfolio-links">
							<a
								href="https://seraphimsage.github.io/todo-app-part-2/"
								className="portfolio-lightbox"
								target="_blank"
								title="Web 3"
							>
								<Icon.Box></Icon.Box>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
