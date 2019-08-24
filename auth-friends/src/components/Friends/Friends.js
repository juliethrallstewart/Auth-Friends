import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import AddFriend from '../AddFriend/AddFriend';
import Edit from '../Edit/Edit'
import { Link } from 'react-router-dom';


const Friends = (props) => {

   const [isLoading, setLoader] = useState(false)

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

    useEffect(() => {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				setFriends(res.data);
			})
			.catch(e => {
				console.log('server error', e);
			});
	}, []);

    const addFriend = newFriend => {
		axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(friends === [] && isLoading === false ? setLoader(true) : setLoader(false))
            .then(console.log(isLoading, 'isLoading logged'))
			.then(res => {
				setFriends(res.data);
            })
            .then(setLoader(false))
            .then(console.log(isLoading, 'isLoading logged'))
            .then(console.log(friends))
			.catch(err => console.log(err.response));
	};
	
	// const unFriend = (id) => {
	// 	setFriends(friends.filter(friend => friend.id != id))
	// }   
  

	return (
        <>
         <AddFriend addFriend={addFriend} isLoading={isLoading}/>
		<div>
        <h1>Friends!</h1>
			{friends.map(friend => {
				return (
					<div>
						<p><strong>Name:</strong> {friend.name}</p>
						<p><strong>Age:</strong> {friend.age}</p>
						<p><strong>Email:</strong> {friend.email}</p>
                    
						{/* <button><Link to="/protected/edit">edit</Link></button> */}
						<Link to={`/edit/${friend.id}`}>
					edit
				</Link>
					

					</div>
				);
			})}
		</div>
        </>
	);
};

export default Friends;
