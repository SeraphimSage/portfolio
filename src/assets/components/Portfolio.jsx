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
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
						aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
						quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
						fugiat sit in iste officiis commodi quidem hic quas.
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
