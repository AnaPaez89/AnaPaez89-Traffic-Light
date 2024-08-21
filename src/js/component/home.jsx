import React, { useState } from "react";


//create your first component
const Home = () => {

	const [color, setColor] = useState(null);

	const handleClick = (flashLight) => {
		if (color === flashLight) {
			setColor(null);
		} else {
			setColor(flashLight);
		};
	}

	const handleRandomLight = () => {
		const colors = ["red", "yellow", "green"];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setColor(randomColor);
	};

	return (
		<div className="trafficLight">
			<div className="upperPart d-flex">
				<div className="stick"></div>
			</div>
			<div className="container rounded text-center">
				<div className="redLight">
					<button
						className={`btn btn-danger rounded-circle ${color === "red" ? "active" : ""}`}
						onClick={() => handleClick("red")}
						type="button"
					></button>
				</div>
				<div className="yellowLight">
					<button
						className={`btn btn-warning rounded-circle ${color === "yellow" ? "active" : ""}`}
						onClick={() => handleClick("yellow")}
						type="button"
					></button>
				</div>
				<div className="greenLight">
					<button
						className={`btn btn-success rounded-circle ${color === "green" ? "active" : ""}`}
						onClick={() => handleClick("green")}
						type="button"
					></button>
				</div>
			</div>
			<div className="lowerPart d-flex mt-1">
				<div className="text-center">
					<button
						className="btn btn-danger"
						onClick={handleRandomLight}
						type="button"
					>Random</button>
				</div>
			</div>
		</div>
	);
};

export default Home;