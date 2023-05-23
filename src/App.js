import { useState } from 'react';
import './App.css';
import Tasklist from './components/Tasklist';
function App() {

	const [taskLists, setTaskLists]=useState([{name:'My tasks', tasks:[{ task: 'lets do it', complete: false }]}])

	// const [tasks, setTasks] = useState([{ task: 'lets do it', complete: false }])
	const [newTask, setNewTask] = useState('')

	function handleEnter(event){
		if(event.key==="Enter"){
			addTask(newTask);
			setNewTask('')
		}
	}
	const addTask = (value) => {
		if (value !== '') {
			let newTask = {
				task: value,
				complete: false,
			}
			setTasks([...tasks, newTask])
		}
	}

	const removeTask = (index) => {
		let filtred = tasks.filter(val => val !== tasks[index])
		setTasks([...filtred])

	}

	const doneTask = (index) => {
		tasks[index].complete = !tasks[index].complete
		setTasks([...tasks])

	}

	return (
		<div className="App">
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
	);
}

export default App;
