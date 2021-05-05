import { useState } from "react";
import discWhite from "./disc-white.svg";
import Controls from "./Controls";
import Metadata from "./Metadata";
import "./App.css";
import PhotoCredit from "./PhotoCredit";

const App = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const logoSpin: string = isPlaying ? "App-logo-playing" : "";
	return (
		<div className="App">
			<header className="App-header">
				<div className="brand">
					<img src={discWhite} className={`App-logo ${logoSpin}`} alt="logo" />
					<h1>boombox</h1>
				</div>
				<Metadata />

				<Controls isPlaying={isPlaying} onPlayClick={setIsPlaying} />
			</header>

			<PhotoCredit />
		</div>
	);
};

export default App;
