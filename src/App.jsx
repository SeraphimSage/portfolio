// import { useState } from "react";
import logo from "./assets/img/Favicon.png";

import "./App.css";
import {
	About,
	Contact,
	Header,
	Portfolio,
	Resume,
} from "./assets/components/Index.jsx";

function App() {
	return (
		<>
			<Header />
			<div>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={logo}
						className="logo seraphicIndustriesLlc"
						alt="Seraphic Industries LLC logo"
					/>
				</a>
			</div>
			<section id="hero">
				<div className="hero-container">
					<h1>Kenneth Pinkerton</h1>
					<p>
						I&apos;m a Developer, a Freelancer, a Business Consultant, and an
						Entrepreneur
					</p>
				</div>
			</section>
			<About />
			<Resume />
			<Portfolio />
			<Contact />
		</>
	);
}

export default App;
