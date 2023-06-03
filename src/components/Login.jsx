import React, { useState } from 'react'
import './css/login.css'
import { useNavigate } from 'react-router-dom'

export default function Login({logEnter}) {
	const [message, setMessage] = useState(false)
	const nav = useNavigate()
	const [userName, setUserName]=useState('')
	const[password,setPassword]= useState('')

	const login = (userName, password)=>{
		// fetch('db/login',{
		// 	headers:{"Accept": "application/json", "Content-Type": "application/json"},
		// 	method:"post",
		// 	body:JSON.stringify({
		// 		userName,
		// 		password
		// 	})
		// })
		// .then(res=>res.json())
		// .then((data)=>{
		// 	if(data.success){
		// 		logEnter(userName, password);
		// 		nav('/workspace')
		// 	}

		// 	else{
		// 		setMessage(true)
		// 	}
		// }).catch(err=>{console.error(err)})
		nav('/workspace')
		logEnter(userName, password);

	}


	
	return (
		<div className='Login'>
			<div className='signin-window flexColumn flexCenter'>
				<h2 style={{color:"white"}}>LOG IN</h2>
				<input onChange={(e)=>{setUserName(e.target.value)}} className='login-input' type="text"  placeholder='username'/>
				<input onChange={(e)=>{setPassword(e.target.value)}}  className='login-input' type="password"  placeholder='password'/>
				<div className='flexRow'>
					<button onClick={()=>{login(userName, password)}} className='button5'>Log in</button>
					
				</div>
			</div>
		</div>
	)
}