// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
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
