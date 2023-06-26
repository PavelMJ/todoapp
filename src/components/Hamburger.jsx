import React, { useState } from 'react'

export default function Hamburger() {
	const [isOpen, setIsOpen] = useState(false)
	const handleHumburger = () => {
		setIsOpen(!isOpen)
	}


	return (
		<div className='Hamburger'>
			<div className='hamburger-menu'>
				<button onClick={handleHumburger} className='humburger-button'>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</button>
			</div>
			<div className={`menu ${isOpen ? 'open' : ''}`}>

				<div className='flexRow'>
					<div className='title2'>User Name</div>
					<div className='avatar'></div>
				</div>

				<hr />
				<div className='flexColumn' >
					<div className='title2' >Calendar</div>
					<div className='title2' >Setting</div>
				</div>


			</div>
		</div>
	)
}
