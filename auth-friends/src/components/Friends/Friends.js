import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import AddFriend from '../AddFriend/AddFriend';
import axios from 'axios'

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

    const addFriend = newFriend => {
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', newFriend)
			.then(res => {
				setFriends(res.data);
            })
            .then(console.log(friends))
			.catch(err => console.log(err.response));
	};
    
	return (
        <>
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
        <AddFriend addFriend={addFriend} />
        </>
	);
};

export default Friends;
