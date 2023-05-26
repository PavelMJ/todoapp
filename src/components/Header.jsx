import React from 'react'

export default function Header({createList}) {
	return (
		<div className='Header'>
			<button onClick={createList} className='create-button'>Create new list</button>
		</div>
	)
}
