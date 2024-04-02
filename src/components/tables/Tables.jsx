/** @format */

import { useState } from "react";
import "./styles.css"; // Import CSS file for styling

export default function Tables() {
	const numbers = [...Array(10).keys()].map((i) => i + 1); // Generate numbers 1 to 10
	const multiplicationNumbers = [...Array(29).keys()].map((i) => i + 2); // Generate numbers 2 to 30
	const [hoveredCell, setHoveredCell] = useState(null);

	return (
		<div className='multiplication-table'>
			{multiplicationNumbers.map((multiplier) => (
				<div
					key={multiplier}
					className='table-container'
				>
					<h3>{multiplier}'s Table</h3>
					<table>
						<thead></thead>
						<tbody>
							{numbers.map((num) => (
								<tr key={num}>
									<td>
										{multiplier} x {num} =
									</td>
									<td
										className='result'
										onMouseEnter={() => setHoveredCell({ multiplier, num })}
										onMouseLeave={() => setHoveredCell(null)}
									>
										{hoveredCell &&
										hoveredCell.multiplier === multiplier &&
										hoveredCell.num === num
											? multiplier * num
											: ""}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
}
