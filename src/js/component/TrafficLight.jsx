import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={`light_red ${
					selectedColor === "red" && "glow"
				}`}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={`light_yellow ${
					selectedColor === "yellow" && "glow"
				}`}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={`light_green ${
					selectedColor === "green" && "glow"
				}`}></div>
		</div>
	);
};

export default TrafficLight;
