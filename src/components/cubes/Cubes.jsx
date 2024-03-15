/** @format */

import React from "react";
import "./styles.css";

export default function Cubes() {
	const cubes = [];
	for (let i = 1; i <= 20; i++) {
		cubes.push(
			<div
				key={i}
				className='cube'
			>
				{i}
				<sup>3</sup> = {Math.pow(i, 3)}
			</div>
		);
	}

	return (
		<div className='container'>
			<div className='cubes-container'>{cubes}</div>
		</div>
	);
}
