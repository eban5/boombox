import { useEffect, useState } from "react";
import discWhite from "./disc-white.svg";
import Controls from "./Controls";
import Metadata from "./Metadata";
import "./App.css";
import PhotoCredit from "./PhotoCredit";
import { RadioBrowserApi, Station } from "radio-browser-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const App = () => {
	// const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

	// const [stationList, setStationList] = useState<Station[]>([]);

	// useEffect(() => {
	// 	api.searchStations({
	// 		limit: 50,
	// 		tagList: ["lofi", "lofi hiphop", "lo-fi", "chill hiphop"],
	// 	}).then((response) => {
	// setStationList(response);
	// 	});
	// }, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className="brand">
					<img src={discWhite} className="App-logo" alt="logo" />
					<h1>boombox</h1>
				</div>
				<Metadata />

				<FontAwesomeIcon icon={faPlayCircle} />
				<Controls />
			</header>

			{/* {stationList &&
				stationList.map((station: Station, index: number) => {
					return <span key={index}>{station.name}</span>;
				})} */}
			<PhotoCredit />
		</div>
	);
};

export default App;
