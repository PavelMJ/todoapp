import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { addList } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';




export default function Creator({ showCreator }) {

	const dispatch = useDispatch()


	const colorOptions = [
		{ value: '#4663d7', label: <div className='color-preview blue'></div> },
		{ value: '#eb5ea0', label: <div className='color-preview pink'></div> },
		{ value: '#5cc77e', label: <div className='color-preview green'></div> },
		{ value: '#d36837', label: <div className='color-preview orange'></div> },
		{ value: '#d257b1', label: <div className='color-preview violett'></div> }
	];

	const [selectedColor, setSelectedColor] = useState({});
	const handleChange = (colorOptions) => {
		setSelectedColor(colorOptions);
	};

	const customStyles = {
		control: (provided) => ({
			...provided,
			width: 150,
			height: 50
		}),
		option: (provided) => ({
			...provided,
			width: 140,
			height: 50,
			margin: '2px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		})
	};

	const [name, setName] = useState('')



	useEffect(() => {

		function handleEscape(event) {
			if (event.key === 'Escape') showCreator()
		}


		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [])

	function handleEnter(event) {
		if (event.key === "Enter") {
			dispatch(addList({ name, color: selectedColor.value || '#4663d7' }));
			showCreator()
		}
	}



	return (
		<div className='Creator'>
			<img className='close' src="/img/close.svg" alt="close" onClick={showCreator} />
			<div className='overlay'></div>
			<div className='input2 flexRow'>
				<input onKeyDown={(e) => { handleEnter(e) }} onChange={(event) => { setName(event.target.value) }} className='input3' type="text" placeholder='create new task list' />
				{selectedColor && <button className='button2' onClick={() => {
					dispatch(addList({ name, color: selectedColor.value || '#4663d7' }));
					showCreator()
				}}>+</button>}
				<Select
					placeholder='Select color'
					value={selectedColor}
					onChange={handleChange}
					options={colorOptions}
					styles={customStyles}
				/>

			</div>

		</div>
	)
}
