import React from 'react'
import { Link } from 'react-router-dom'


export default function Header({createList,logedIn, logout }) {
	


	return (
		<div className='Header'>
			<h2 className='main-title' style={{color:"white", margin:"10px"}}>To-Do</h2>
			<button onClick={createList} className='create-button'>Create new list</button>
			{ logedIn === false && <Link to='/register'><button  className='create-button'>Sign Up</button></Link>}
			{ logedIn === true && <Link to='/login'><button onClick={(logout)}  className='create-button'>Exit</button></Link>}
			<div></div>
		</div>
	)
}
