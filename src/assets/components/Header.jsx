const Header = () => {
	return (
		<header id="header">
			<div className="d-flex flex-column">
				<div className="profile">
					<img
						src="assets/img/Us.webp"
						alt=""
						className="img-fluid rounded-circle"
					/>
					<h1 className="text-light">
						<a href="index.html">Kenneth Pinkerton</a>
					</h1>
					<div className="social-links mt-3 text-center">
						<a
							href="https://www.facebook.com/kenneth.pinkerton.90"
							className="facebook"
						>
							<i className="bx bxl-facebook"></i>
						</a>
						<a
							href="https://www.linkedin.com/in/kenneth-pinkerton-5b8a1463/"
							className="linkedin"
						>
							<i className="bx bxl-linkedin"></i>
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
								<i className="bx bx-home"></i> <span>Home</span>
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="nav-link scrollto"
							>
								<i className="bx bx-user"></i> <span>About</span>
							</a>
						</li>
						<li>
							<a
								href="#resume"
								className="nav-link scrollto"
							>
								<i className="bx bx-file-blank"></i> <span>Resume</span>
							</a>
						</li>

						<li>
							<a
								href="#contact"
								className="nav-link scrollto"
							>
								<i className="bx bx-envelope"></i> <span>Contact</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
