import React, { useState } from 'react'
import { Reorder } from 'framer-motion';


export default function Task({ task, index, doneTask, removeTask }) {

	const [done, setDone] = useState(false)
	return (
		<Reorder.Item value={task} >
			<div className='Task flexSpBetwean'>
				<div className='done' onClick={() => {
					setDone(!done);
					doneTask(index)
				}}>
					{done && <img src="/img/done.svg" alt="" />}
					{done === false && <img src="/img/undone.svg" alt="" />}
				</div>
				<div className='title' style={{ textDecoration: `${done ? 'line-through' : 'none'}` }}>{task.task}</div>
				<div className='del' onClick={() => { removeTask(index) }}>
					<img src="/img/trash.svg" alt="" />
				</div>
			</div>
		</Reorder.Item>
	)
}
