import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Friends from '../src/components/Friends/Friends';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import Edit from '../src/components/Edit/Edit.js';
import { axiosWithAuth } from '../src/utils/axiosWithAuth';

function App () {
	return (
		<Router>
			<div className="App">
				<ul>
					{/* <li>
						<Link to="/login">Login</Link>
					</li> */}
					{/* <li>
						<Link to="/protected">Protected Page</Link>
					</li> */}
				</ul>
				<Route path="/login" component={Login} />
				<PrivateRoute exact path="/protected" component={Friends} />
				{/* <PrivateRoute
					exact
					path="/protected"
					render={props => <Friends {...props} friends={friends} setFriends={setFriends} />}
				/> */}

				<Route path="/edit/:id" render={props => <Edit {...props} />} />
			</div>
		</Router>
	);
}

export default App;
