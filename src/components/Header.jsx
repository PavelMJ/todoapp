import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger';


export default function Header({logedIn, logout, showCreator }) {
	


	return (
		<div className='Header'>
			<h2 className='main-title' style={{color:"white", margin:"10px"}}>To-Do</h2>
			{logedIn && <button onClick={showCreator} className='create-button'>Create new list</button>}
			{ logedIn === false && <Link to='/register'><button  className='create-button sign-up'>Sign Up</button></Link>}
			{ logedIn === true && <Link to='/'><button onClick={(logout)}  className='create-button'>Exit</button></Link>}
			{logedIn && <Hamburger />}
			<div></div>
		</div>
	)
}
