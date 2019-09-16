import React, { useState } from 'react'
import BarLoader from 'react-spinners'


const AddFriend = props => {

	const { addFriend, isLoading } = props;

	const [ newFriend, setNewFriend ] = useState({ name: '', age: '', email: '' });

	const handleChange = event => {
		setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
		// console.log('handleChange', event.target.name, event.target.value, smurf);
	};
	const handleSubmit = event => {
		event.preventDefault();
		addFriend(newFriend);
		setNewFriend({ name: '', age: '', email: '' });
	};
	return (
        <>
			<div className="login-container">
				<div className="login-form">
					<form onSubmit={handleSubmit}>
						<input placeholder="name" value={newFriend.name} name="name" onChange={handleChange} />
						<input placeholder="age" value={newFriend.age} name="age" onChange={handleChange} />
                        <input placeholder="email" value={newFriend.email} name="email" onChange={handleChange} />

						{/* <button type="submit">add Friend</button> */}
						<button>
							{isLoading ? <BarLoader className="spinner" color="#00BFFF" /> : 'Add Friend'}
						</button>
					</form>
				</div>
			</div>
            </>
		
	);
};

export default AddFriend;
