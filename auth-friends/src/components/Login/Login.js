import React, { useState } from 'react'
import axios from 'axios'

const Login = props => {

    // const { login } = props;

    const login = e => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', loginFriend)
			.then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push("/protected")
			})
			.catch(err => console.log(err.response));
	};

	const [ loginFriend, setFriend ] = useState({ username: '', password: '' });

	const handleChange = event => {
		setFriend({ ...loginFriend, [event.target.name]: event.target.value });
        // console.log('handleChange', event.target.name, event.target.value, loginFriend);
    };
  
	return (
        <>
        {/* <Friends /> */}
			<div className="login-container">
				<div className="login-form">
					<form onSubmit={login}>
						<input type="text" placeholder="username" value={loginFriend.username} name="username" onChange={handleChange} />
						<input type="password" placeholder="password" value={loginFriend.password} name="password" onChange={handleChange} />
						<button type="submit">Login</button> 
					</form>
				</div>
			</div>
            </>
		
	);
};

export default Login;

