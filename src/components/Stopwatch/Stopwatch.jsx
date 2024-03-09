/** @format */

import React, { useState, useRef } from "react";
import "./Stopwatch.css";

function Stopwatch() {
	const [isRunning, setIsRunning] = useState(false);
	const [time, setTime] = useState(0);
	const intervalRef = useRef(null);

	const startStopwatch = () => {
		setIsRunning(true);
		intervalRef.current = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	};

	const stopStopwatch = () => {
		setIsRunning(false);
		clearInterval(intervalRef.current);
	};

	const resetStopwatch = () => {
		setTime(0);
		clearInterval(intervalRef.current);
		setIsRunning(false);
	};

	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
	};

	return (
		<div className='stopwatch'>
			<div className='display'>{formatTime(time)}</div>
			<div className='controls'>
				{!isRunning ? (
					<button onClick={startStopwatch}>Start</button>
				) : (
					<button onClick={stopStopwatch}>Stop</button>
				)}
				<button onClick={resetStopwatch}>Reset</button>
			</div>
		</div>
	);
}

export default Stopwatch;
