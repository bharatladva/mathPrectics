/** @format */

import "./App.css";
import MetricsGrid from "./components/MetricsGrid/MetricsGrid";
import Todo from "./components/todo/Todo";
import Tables from "./components/tables/Tables";
import Squares from "./components/Squares/Squares";
import Cubes from "./components/cubes/Cubes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			{" "}
			{/* Wrap entire application with Router */}
			<div className='homepage'>
				<Todo />
				<Routes>
					<Route
						path='/'
						element={<MetricsGrid />}
					/>
					<Route
						path='/tables'
						element={<Tables />}
					/>
					<Route
						path='/Squares'
						element={<Squares />}
					/>
					<Route
						path='/cubes'
						element={<Cubes />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
