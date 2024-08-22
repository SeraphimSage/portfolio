import "./Hero.css";
import logo from "../img/Favicon.png";

const Hero = () => {
	return (
		<div>
			<section id="hero">
				<div className="hero-container">
					<h1>Kenneth Pinkerton</h1>
					<div>
						<a
							href="https://github.com/SeraphimSage"
							target="_blank"
						>
							<img
								src={logo}
								className="logo seraphicIndustriesLlc"
								alt="Seraphic Industries LLC logo"
							/>
						</a>
					</div>
					<p>
						I&apos;m a Developer, a Freelancer, a Business Consultant, and an
						Entrepreneur
					</p>
				</div>
			</section>
		</div>
	);
};

export default Hero;
