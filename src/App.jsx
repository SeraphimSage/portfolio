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
			<Hero />
			<About />
			<Skills />
			<Resume />
			<Portfolio />
			<Contact />
		</>
	);
}

export default App;
