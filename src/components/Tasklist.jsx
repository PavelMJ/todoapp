import React, { useState } from 'react'
import Task from './Task'
import { Reorder } from 'framer-motion';

export default function Tasklist({ list, index, updateList }) {
	const [cnt, setCnt] = useState(1)
	console.log(list);
	const [newTask, setNewTask] = useState('')
	const [tasks, setTasks] = useState([{ id: 0, task: 'lets do it', complete: false }])
	const addTask = (task, id) => {
		let newTask
		if (task !== '') {
			setCnt(cnt + 1)
			newTask = {
				id,
				task,
				complete: false,
			}
			setTasks([...tasks, newTask])
			updateList(task,index)
		}
	}

	const removeTask = (index) => {
		setTasks(tasks.filter(task => task !== tasks[index]))
		
	}

	const doneTask = (index) => {
		tasks[index].complete = !tasks[index].complete
		setTasks([...tasks])

	}


	function handleEnter(event) {
		if (event.key === "Enter") {
			addTask(newTask, cnt);
			setNewTask('')
		}
	}
	return (
		<div className='Tasklist'>
			<header style={{backgroundColor:`${list.color}`}}>
				<div>{list.name}</div>
				<img src="/img/execloser.svg" alt="exe" />
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
					addTask(newTask, cnt);
					setNewTask('')
				}} className='button'>+</div>
			</div>
			<div className='conteiner'>
				<Reorder.Group style={{ listStyle: 'none', margin: '0', padding: '0' }} axis="y" values={tasks} onReorder={setTasks}>
					{tasks.map((task, index) => (
						 <Task
							key={task.id}
							task={task}
							index={index}
							removeTask={removeTask}
							doneTask={doneTask}
						/>
					))}
				</Reorder.Group>
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
