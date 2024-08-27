import { Typewriter } from "react-simple-typewriter";
import "../css/Hero.css";
import logo from "../img/Favicon.png";

const Hero = () => {
	return (
		<div>
			<section id="hero">
				<div className="hero-container">
					<div className="name-profile-container">
						<h1 className="developer-name">Kenneth Pinkerton</h1>
						<div className="gitHub-profile">
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
					</div>
					<div className="wrapper">
						<p className="static-text">I&apos;m</p>
						<span className="dynamic-text">
							<Typewriter
								words={[
									"a Developer",
									"a Freelancer",
									"a Business Consultant",
									"an Entrepreneur",
								]}
								loop={0} // Set to `0` for infinite loop
								cursor
								cursorStyle="|"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
