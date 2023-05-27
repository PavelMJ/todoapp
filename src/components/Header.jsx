import React from 'react'

export default function Header({createList}) {


	return (
		<div className='Header'>
			<h2 className='main-title' style={{color:"white", margin:"10px"}}>To-Do</h2>
			<button onClick={createList} className='create-button'>Create new list</button>
			<div></div>
		</div>
	)
}
