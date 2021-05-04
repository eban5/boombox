import React from "react";
import disc from "./disc.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>boombox</h1>
				<img src={disc} className="App-logo" alt="logo" />
				<p>Track name</p>
				<p>Artist</p>
			</header>
		</div>
	);
}

export default App;
