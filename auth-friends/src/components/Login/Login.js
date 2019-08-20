import React, { useState } from 'react'
import axios from 'axios'
import Friends from '../Friends/Friends'

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
        // console.log('handleChange', event.target.name, event.target.value, smurf);
        // setFriend({[event.target.name]: event.target.value }
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
                        {/* use routing here so that login for links to protected page */}
					</form>
				</div>
			</div>
            </>
		
	);
};

export default Login;


// const Login = props => {

//     // const { login } = props;

//     const login = e => {
// 		e.preventDefault();
// 		axios
// 			.post('http://localhost:5000/api/login', loginFriend.credentials)
// 			.then(res => {
// 				localStorage.setItem('token', res.data.payload);
// 			})
// 			.catch(err => console.log(err.response));
// 	};

// 	const [ loginFriend, setFriend ] = useState({ credentials: '', username: '', password: '' });

// 	const handleChange = event => {
// 		// setFriend({ ...loginFriend, [event.target.name]: event.target.value });
//         // console.log('handleChange', event.target.name, event.target.value, smurf);
//         setFriend({credentials: {...loginFriend.credentials, [event.target.name]: event.target.value }
//     })};
  
// 	return (
//         <>
//         <Friends />
// 			<div className="login-container">
// 				<div className="login-form">
// 					<form onSubmit={login}>
// 						<input type="text" placeholder="username" value={loginFriend.credentials.username} name="username" onChange={handleChange} />
// 						<input type="password" placeholder="password" value={loginFriend.credentials.password} name="password" onChange={handleChange} />
// 						<button type="submit">Login</button>
// 					</form>
// 				</div>
// 			</div>
//             </>
		
// 	);
// };

// export default Login;
