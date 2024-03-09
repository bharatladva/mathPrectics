/** @format */

import "./Todo.css";
import { Link } from "react-router-dom";
import Stopwatch from "../Stopwatch/Stopwatch";

export default function Todo() {
	return (
		<div className='task-page'>
			<h1>Tasks</h1>
			<div className='task-list'>
				<Link to='/'>
					<div className='task-item'>
						<h2>9x9 Addition Table</h2>
						{/* Addition table content goes here */}
					</div>
				</Link>
				<Link to='/tables'>
					<div className='task-item'>
						<h2>1 to 30 Table</h2>
						{/* Table content goes here */}
					</div>
				</Link>
				<Link to='/Squares'>
					<div className='task-item'>
						<h2>1² to 40²</h2>
						{/* Scores content goes here */}
					</div>
				</Link>
				<Link to='/Cubes'>
					<div className='task-item'>
						<h2>1³ to 9³</h2>
						{/* Cubes content goes here */}
					</div>
				</Link>
			</div>
			<Stopwatch />
		</div>
	);
}
