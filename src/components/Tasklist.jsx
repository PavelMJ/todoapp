import React, { useState } from 'react'
import Task from './Task'
import { removeList, addTask } from '../redux/taskSlice'
import { useDispatch } from 'react-redux'

export default function Tasklist({ list, index, removeTask, doneTask }) {

	const dispatch = useDispatch()
	const [newTask, setNewTask] = useState('')


	function handleEnter(e) {
		if (e.key === "Enter") {
			addTask(newTask, index);
			setNewTask('')
		}
	}
	return (
		<div
			className='Tasklist'>
			<header style={{ backgroundColor: `${list.color}` }}>
				<div className='list-name'>{list.name}</div>
				<div className='close-list' onClick={() => { dispatch(removeList({ index })) }}><img src="/img/execloser.svg" alt="exe" /></div>
			</header>
			<div className=' addTask'>
				<input
					className='input'
					onKeyDown={(e) => { handleEnter(e) }}
					type="text"
					placeholder='new task'
					onChange={(e) => { setNewTask(e.target.value) }}
					value={newTask} />
				<div onClick={() => {
					dispatch(addTask({ newTask, index }));
					setNewTask('')

				}} className='button'>+</div>
			</div>
			<div className='conteiner'>
				{list.tasks.map((task, i) => (
					<Task
						key={task.id}
						task={task}
						taskIndex={i}
						listIndex={index}
						removeTask={removeTask}
						doneTask={doneTask}

					/>
				))}
			</div>
		</div>
	)
}

// const Task = ({ task, index, doneTask, removeTask }) => {
// 	const [done, setDone] = useState(false)
// 	return (
// 		<Reorder.Item value={task} >
// 			<div className='Task flexSpBetwean'>
// 				<div className='done' onClick={() => {
// 					setDone(!done);
// 					doneTask(index)
// 				}}>
// 					{done && <img src="/img/done.svg" alt="" />}
// 					{done === false && <img src="/img/undone.svg" alt="" />}
// 				</div>
// 				<div className='title' style={{ textDecoration: `${done ? 'line-through' : 'none'}` }}>{task.task}</div>
// 				<div className='del' onClick={() => { removeTask(index) }}>
// 					<img src="/img/trash.svg" alt="" />
// 				</div>
// 			</div>
// 		</Reorder.Item>
// 	)
// }
