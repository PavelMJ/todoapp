import React, { useState } from 'react'

export default function Hamburger() {
	const [isOpen,setIsOpen] =useState(false)

	return (
		<div className='Hamburger'>
			<button className='humburger-button'>
				<span className='line'></span>
				<span className='line'></span>
				<span className='line'></span>
			</button>
			<div className={`menu ${isOpen? 'open': ''}`}>
				
			</div>
		</div>
	)
}
