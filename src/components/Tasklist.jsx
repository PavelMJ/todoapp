import React from 'react'
import Task from './Task'

export default function Tasklist({tasks}) {
	return (
		<div className='Tasklist'>
						<header>My Tasks</header>
			<div className=' addTask'>
				<input
					onKeyDown={(e)=>{handleEnter(e)}}
					type="text"
					placeholder='new task'
					onChange={(e) => { setNewTask(e.target.value) }}
					value={newTask} />
				<div onClick={() => {
					addTask(newTask);
					setNewTask('')
				}} className='button'>+</div>
			</div>
			<div className='conteiner'>
				{tasks.map((task, index) => {
					return <Task
						key={index}
						task={task}
						index={index}
						removeTask={removeTask}
						doneTask={doneTask}
					/>
				})}
			</div>
		</div>
	)
}
