/** @format */
import "./styles.css";
export default function Squares() {
	const powers = [];
	for (let i = 1; i <= 40; i++) {
		powers.push(
			<div
				key={i}
				className='power'
			>
				{i}
				<sup>{2}</sup> = {Math.pow(i, 2)}
			</div>
		);
	}

	return (
		<div className='container'>
			<div className='powers-container'>{powers}</div>
		</div>
	);
}
