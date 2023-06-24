import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({regEnter, AddUser}) {
	const nav = useNavigate()

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const createUser =(userName,password, email)=>{

		// fetch('/db/register',{
		// 	headers:{"Accept": "application/json", "Content-Type": "application/json"},
		// 	method: 'post',
		// 	body: JSON.stringify({
		// 		userName,
		// 		password,
		// 		email
		// 	})
		// }).then((res)=>{return res.json()
		// }).then((data)=>{console.log(data);regEnter(data);nav('/worksrace')
		// }).catch(err=>{console.error(err)
		// })
		AddUser(userName,password, email)
		regEnter(userName, email)
		nav('/workspace')
	}

	return (
		<div className='Login'>
			<div className='signin-window flexColumn flexCenter'>
				<h2 style={{ color: "white" }}>LOG IN</h2>
				<input onChange={(e) => { setUserName(e.target.value) }} className='login-input' type="text" placeholder='username' value={userName} />
				<input onChange={(e) => { setEmail(e.target.value) }} className='login-input' type="text" placeholder='email' value={email} />
				<input onChange={(e) => { setPassword(e.target.value) }} className='login-input' type="password" placeholder='password' value={password} />
				<div className='flexRow'>
					<button onClick={()=>{
						createUser(userName, password, email);
						setUserName('');setEmail('');setPassword('')
						}} className='button3'>Register</button>

				</div>
			</div>
		</div>
	)
}
