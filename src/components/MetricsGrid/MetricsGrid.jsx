/** @format */

import { useState, useEffect } from "react";
import "./MetricsGrid.css";

const MetricsGrid = () => {
	const [metrics, setMetrics] = useState([]);
	const [showRowSum, setShowRowSum] = useState(false);
	const [showColSum, setShowColSum] = useState(false);
	const [rowSums, setRowSums] = useState(Array(9).fill(0)); // Array to store row sums
	const [colSums, setColSums] = useState(Array(9).fill(0)); // Array to store column sums

	useEffect(() => {
		// Initialize the metrics array with random values between 2 and 9
		const initializeMetrics = () => {
			const newMetrics = [];
			for (let i = 0; i < 9; i++) {
				const row = [];
				for (let j = 0; j < 9; j++) {
					row.push(Math.floor(Math.random() * 8) + 2);
				}
				newMetrics.push(row);
			}
			setMetrics(newMetrics);
		};

		initializeMetrics();
	}, []);

	useEffect(() => {
		// Calculate row sums when metrics change
		const calculateRowSums = () => {
			const sums = metrics.map((row) => row.reduce((acc, val) => acc + val, 0));
			setRowSums(sums);
		};

		// Calculate column sums when metrics change
		const calculateColSums = () => {
			const sums = Array(9).fill(0);
			metrics.forEach((row) => {
				row.forEach((val, index) => {
					sums[index] += val;
				});
			});
			setColSums(sums);
		};

		calculateRowSums();
		calculateColSums();
	}, [metrics]);

	// Function to randomize array values between 2 and 9
	const randomizeMetrics = () => {
		const newMetrics = metrics.map((row) => row.map(() => Math.floor(Math.random() * 8) + 2));
		setMetrics(newMetrics);
	};

	const toggleRowSum = () => {
		setShowRowSum(!showRowSum);
	};

	const toggleColSum = () => {
		setShowColSum(!showColSum);
	};

	//-----------------------------------------------------------------

	const [inputs, setInputs] = useState(Array(9).fill(""));
	const [colInputs, setColInputs] = useState(Array(9).fill(""));

	const handleInputChange = (index, event) => {
		const newValue = event.target.value;
		// Check if the input is a valid integer
		if (/^\d*$/.test(newValue)) {
			const newInputs = [...inputs];
			newInputs[index] = newValue;
			setInputs(newInputs);
		}
	};

	const handleColInputChange = (index, event) => {
		const newValue = event.target.value;
		// Check if the input is a valid integer
		if (/^\d*$/.test(newValue)) {
			const newInputs = [...colInputs];
			newInputs[index] = newValue;
			setColInputs(newInputs);
		}
	};

	const handleKeyDown = (index, event) => {
		if ((event.key === "ArrowRight" && index < 8) || event.key === "Enter") {
			document.getElementById(`input-${index + 1}`).focus();
		} else if (event.key === "ArrowLeft" && index > 0) {
			document.getElementById(`input-${index - 1}`).focus();
		}
	};
	const handleColKeyDown = (index, event) => {
		if ((event.key === "ArrowRight" && index < 8) || event.key === "Enter") {
			document.getElementById(`colinput-${index + 1}`).focus();
		} else if (event.key === "ArrowLeft" && index > 0) {
			document.getElementById(`colinput-${index - 1}`).focus();
		}
	};
	//--------------------------------------------------------------

	return (
		<div className='container'>
			<div className='main'>
				<div className='metrics-grid'>
					{metrics.map((row, rowIndex) => (
						<div
							key={rowIndex}
							className='row'
						>
							{row.map((metric, colIndex) => (
								<div
									key={colIndex}
									className='metric'
								>
									{metric}
								</div>
							))}
						</div>
					))}
				</div>

				<div className='userInput'>
					<div className='nine-input-box'>
						<h2>Enter your row sum</h2>
						<div className='input-boxes-values'>
							<div className='nine-input-box'>
								{inputs.map((value, index) => (
									<input
										key={index}
										id={`input-${index}`}
										className='input'
										value={value}
										onChange={(event) => handleInputChange(index, event)}
										onKeyDown={(event) => handleKeyDown(index, event)}
									/>
								))}
							</div>
							<div>
								{showRowSum && (
									<div className='nine-input-box sum-values'>
										{rowSums.map((value, index) => (
											<input
												key={index}
												className='input'
												value={value}
												disabled={true}
											/>
										))}
									</div>
								)}
							</div>
						</div>
					</div>

					<div className='nine-input-box'>
						<h2>Enter your col sum</h2>

						<div className='input-boxes-values'>
							<div className='nine-input-box'>
								{colInputs.map((value, index) => (
									<input
										key={index}
										id={`colinput-${index}`}
										className='input'
										value={value}
										onChange={(event) => handleColInputChange(index, event)}
										onKeyDown={(event) => handleColKeyDown(index, event)}
									/>
								))}
							</div>

							{showColSum && (
								<div className='nine-input-box sum-values'>
									{colSums.map((value, index) => (
										<input
											key={index}
											className='input'
											value={value}
											disabled={true}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='buttons-div'>
					<button onClick={randomizeMetrics}>Randomize Table</button>
					<button onClick={toggleRowSum}>
						{showRowSum ? "Hide Row Sum" : "Show Row Sum"}
					</button>
					<button onClick={toggleColSum}>
						{showColSum ? "Hide Col Sum" : "Show Col Sum"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default MetricsGrid;
