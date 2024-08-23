// import { useState } from "react";

import "./App.css";
import {
	About,
	Skills,
	Contact,
	Header,
	Hero,
	Portfolio,
	Resume,
} from "./assets/components/Index.jsx";

function App() {
	return (
		<>
			<Header />
			<div className="content-holder">
				<Hero />
				<About />
				<Skills />
				<Resume />
				<Portfolio />
				<Contact />
			</div>
		</>
	);
}

export default App;
