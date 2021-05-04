import disc from "./disc.svg";
import Controls from "./Controls";
import Metadata from "./Metadata";
import "./App.css";
import PhotoCredit from "./PhotoCredit";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>boombox</h1>
				<img src={disc} className="App-logo" alt="logo" />
				<Metadata />
				<Controls />
			</header>
			<PhotoCredit />
		</div>
	);
}

export default App;
