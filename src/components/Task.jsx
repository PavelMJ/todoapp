import React, { useState } from 'react'
import { removeTask, doneTask } from '../redux/taskSlice'
import { useDispatch } from 'react-redux'


export default function Task({ task, listIndex, taskIndex }) {
	const dispatch = useDispatch()

	const [done, setDone] = useState(false)
	return (
		<div className='Task flexSpBetwean'>
			<div className='done' onClick={() => {
				setDone(!done);
				dispatch(doneTask({ listIndex, taskIndex }))
			}}>
				{done && <img src="/img/done.svg" alt="" />}
				{done === false && <img src="/img/undone.svg" alt="" />}
			</div>
			<div className='title' style={{ textDecoration: `${done ? 'line-through' : 'none'}` }}>{task.task}</div>
			<div className='del' onClick={() => { dispatch(removeTask({ listIndex, taskIndex })) }}>
				<img src="/img/trash.svg" alt="" />
			</div>
		</div>
	)
}
