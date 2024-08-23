import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.js";
import "../css/Portfolio.css";
const Portfolio = () => {
	useEffect(() => {
		Aos.init();
	}, []);
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

				<div
					className="row"
					data-aos="fade-up"
				></div>

				<div className="col-lg-4 col-md-6 portfolio-item filter-web">
					<div className="portfolio-wrap">
						<img
							src="assets/img/portfolio/portfolio-9.jpg"
							className="img-fluid"
							alt=""
						/>
						<div className="portfolio-links">
							<a
								href="assets/img/portfolio/portfolio-9.jpg"
								data-gallery="portfolioGallery"
								className="portfolio-lightbox"
								title="Web 3"
							>
								<i className="bx bx-plus"></i>
							</a>
							<a
								href="portfolio-details.html"
								title="More Details"
							>
								<i className="bx bx-link"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
