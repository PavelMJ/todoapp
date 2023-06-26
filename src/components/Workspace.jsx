import React from 'react'
import { useSelector } from 'react-redux';
import Tasklist from './Tasklist';
export default function Workspace({ removeTask, doneTask }) {

	const taskLists = useSelector(state => state.tasks.taskLists)

	return (
		<div className='Workspace'>

			<div className='flexRow'>

			</div>
			<div className='Content'>
				{taskLists.map((list, index) => {
					return <Tasklist

						key={list.id}
						index={index}
						list={list}
						removeTask={removeTask}
						doneTask={doneTask}


					/>
				})
				}
			</div>

		</div>
	)
}
