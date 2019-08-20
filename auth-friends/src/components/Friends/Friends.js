import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Friends = () => {
	const [ friends, setFriends ] = useState([]);

	const getData = () => {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				console.log('friends', res.data);
			})
			.then(res => {
				setFriends({ friends: [ res.data ] });
			})
			.then(console.log(friends))
			.catch(err => console.log(err.response));
	};

	getData();
	return (
		<div>
			{friends.map(friend => {
				return (
					<div>
						<h1>Friends!</h1>
						<p>{friend.name}</p>
						<p>{friend.age}</p>
						<p>{friend.email}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Friends;
