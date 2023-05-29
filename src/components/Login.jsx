import React, { useState } from 'react'
import './css/login.css'

export default function Login({loginUser}) {
	const [userName, setUserName]=useState('')
	const[password,setPassword]= useState('')

	


	
	return (
		<div className='Login'>
			<div className='signin-window flexColumn flexCenter'>
				<h2 style={{color:"white"}}>LOG IN</h2>
				<input onChange={(e)=>{setUserName(e.target.value)}} className='login-input' type="text"  placeholder='username'/>
				<input onChange={(e)=>{setPassword(e.target.value)}}  className='login-input' type="text"  placeholder='password'/>
				<div className='flexRow'>
					<button className='button5'>Log in</button>
					
				</div>
			</div>
		</div>
	)
}