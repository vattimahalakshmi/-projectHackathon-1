import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
	const [value, onChange] = useState(new Date());
	const [cycle, cycleValue] = useState("28");
	const date = value;
	console.log(cycle);
	const cycleLength = parseInt(cycle);
	return (
		<div className="full" id="lifestyle">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">GoCycle</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="xx.html">Tips</Nav.Link>
						<Nav.Link href="workout.html">Workout</Nav.Link>
						<Nav.Link href="clothing.html">Clothing</Nav.Link>
						<Nav.Link href="diet.html">Diet</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div className="val1">
				<script src="https://cdn.tailwindcss.com"></script>
				<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
				<div className="space">
					<div className="val">
						<div className="text-center">
							<h3>GoCycle - Calculate Next period, Ovulation Day</h3>
							<label for="cycle"><b>Select your Cycle Length : </b></label>
							<select onChange={(e) => cycleValue(e.target.value)} defaultValue={cycle} className="m-2">
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
								<option value="34">34</option>
								<option value="35">35</option>
								<option value="36">36</option>
								<option value="37">37</option>
								<option value="38">38</option>
								<option value="39">39</option>
								<option value="40">40</option>
							</select>
						</div>
						<p className="text-center">
							<b>
							Select Your Last Period Start Date from the Calendar
							</b>
						</p>

						<div className="d-flex justify-content-center ">
							<Calendar onChange={onChange} value={value}
								className="calendar mt-0" />
						</div>
						<div className="text-center mt-4 p-2">
							<div className="row">
								<div class="d-flex justify-content-center">
									<div className="col-md-3 m-3 box ">
										<p>Next Period</p>

										<Moment format="Do MMMM YYYY"
											add={{ days: cycleLength - 1 }}>
											{date}
										</Moment>
									</div>
									<div className="col-md-3 m-3 box ">
										<p> Approximate Ovulation Day</p>
										<Moment
											format="Do MMMM YYYY"
											add={{ days: cycleLength - 1 - 14 }}
										>
											{date}
										</Moment>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	);
}
export default App;
