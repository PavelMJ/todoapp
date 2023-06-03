import React, { useState } from 'react'


export default function Task({ task,listIndex, taskIndex, doneTask, removeTask }) {

	const [done, setDone] = useState(false)
	return (
			<div className='Task flexSpBetwean'>
				<div className='done' onClick={() => {
					setDone(!done);
					doneTask(listIndex, taskIndex)
				}}>
					{done && <img src="/img/done.svg" alt="" />}
					{done === false && <img src="/img/undone.svg" alt="" />}
				</div>
				<div className='title' style={{ textDecoration: `${done ? 'line-through' : 'none'}` }}>{task.task}</div>
				<div className='del' onClick={() => { removeTask(listIndex,taskIndex) }}>
					<img src="/img/trash.svg" alt="" />
				</div>
			</div>
	)
}
