import "../css/Header.css";
import profileImg from "../img/Us.webp";
import * as Icon from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";

const Header = () => {
	return (
		<header id="header">
			<div className="d-flex flex-column">
				<div className="profile">
					<Image
						src={profileImg}
						alt=""
						roundedCircle
					/>
					<h1 className="text-light">
						<a href="index.html">Kenneth Pinkerton</a>
					</h1>
					<div className="social-links mt-3 text-center">
						<a
							href="https://www.facebook.com/kenneth.pinkerton.90"
							className="facebook"
							target="_blank"
						>
							<Icon.Facebook />
						</a>
						<a
							href="https://www.linkedin.com/in/kenneth-pinkerton-5b8a1463/"
							className="linkedin"
							target="_blank"
						>
							<Icon.Linkedin />
						</a>
					</div>
				</div>

				<nav
					id="navbar"
					className="nav-menu navbar"
				>
					<ul>
						<li>
							<a
								href="#hero"
								className="nav-link scrollto active"
							>
								<Icon.House /> <span>Home</span>
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="nav-link scrollto"
							>
								<Icon.Box /> <span>About</span>
							</a>
						</li>
						<li>
							<a
								href="#resume"
								className="nav-link scrollto"
							>
								<Icon.CardList /> <span>Resume</span>
							</a>
						</li>
						<li>
							<a
								href="#portfolio"
								className="nav-link scrollto"
							>
								<Icon.Bookshelf /> <span>Portfolio</span>
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="nav-link scrollto"
							>
								<Icon.Envelope /> <span>Contact</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
