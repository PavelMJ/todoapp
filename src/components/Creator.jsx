import React, { useState } from 'react'

export default function Creator({addList, nameSetting}) {
	const [name, setName]=useState('')

	function handleEscape(event){
		if(event.key==="Esc"){
			nameSetting()
		}
	}

	function handleEnter(event){
		if(event.key==="Enter"){
			addList(name)
		}
	}
	return (
		<div className='Creator overlay'>
			<img className='close' src="/img/close.svg" alt="close" onClick={nameSetting} />
			<div className='input2 flexRow'>
			<input onKeyDown={(e)=>{handleEnter(e)}} onChange={(event)=>{setName(event.target.value)}} className='input3'  type="text" placeholder='create new task list' />
			<button className='button2' onClick={()=>{addList(name)}}>+</button>
			</div>
			
		</div>
	)
}
