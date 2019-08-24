import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import BarLoader from 'react-spinners';

const Edit = props => {
	const [ friend, setFriend ] = useState(null);

	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			const id = props.match.params.id;
			axiosWithAuth()
				.get(`http://localhost:5000/api/friends/${id}`)
				.then(res => {
					console.log(res);
					setFriend(res.data);
				})
				.catch(e => {
					console.log('get friend error', e);
				});
		},
		[ props.match.params.id ]
	);

	const deleteFriend = e => {
		const id = props.match.params.id;
		e.preventDefault();
		axiosWithAuth()
			.delete(`http://localhost:5000/api/friends/${id}`)
			.then(res => {
				console.log('results from unfriending', res);
				props.history.push('/protected');
			})
			.catch(err => console.log(err.response));
	};

	const handleChange = event => {
		setFriend({ ...setFriend, [event.target.name]: event.target.value });
		// console.log('handleChange', event.target.name, event.target.value, smurf);
	};
	const handleSubmit = event => {
		const id = props.match.params.id;
		event.preventDefault();
		axiosWithAuth()
			.put(`http://localhost:5000/api/friends/${id}`, friend)
			.then(res => {
				console.log(res);
			})
			.catch(e => {
				console.log('put error', e);
			});
	};

	if (!friend) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<p>Edit Friend</p>
			<div className="login-container">
				<div className="login-form">
					<form onSubmit={handleSubmit}>
						<input placeholder="name" value={friend.name} name="name" onChange={handleChange} />
						<input placeholder="age" value={friend.age} name="age" onChange={handleChange} />
						<input placeholder="email" value={friend.email} name="email" onChange={handleChange} />
						{/* <button>{isLoading ? <BarLoader className="spinner" color="#00BFFF" /> : 'Submit Edit'}</button> */}
						<button>Submit</button>
					</form>
				</div>
			</div>
			<Link to="/protected">back</Link>
			<button onClick={deleteFriend}>delete</button>
		</div>
	);
};

export default Edit;
