/** @format */
import "./styles.css";
export default function tables() {
	const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

	return (
		<div className='multiplication-chart'>
			<table>
				<thead>
					<tr></tr>
				</thead>
				<tbody>
					{numbers.map((rowNum) => (
						<tr key={rowNum}>
							{numbers.map((colNum) => (
								<td key={`${rowNum}-${colNum}`}>{`${rowNum} x ${colNum} = ${
									rowNum * colNum
								}`}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
