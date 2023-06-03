import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Workspace from './components/Workspace';
import Login from './components/Login';
import Register from './components/Register';
import Creator from './components/Creator';

function App() {
	const [taskLists, setTaskLists] = useState([])
	const [idCnt, setIdCnt] = useState(1)
	const [listName, setListName] = useState(false)
	const [user, setUser] = useState({})
	const [logedIn, setLogedIn] = useState(false)

	// console.log(user);
	console.log(taskLists, 'taskList');



	

	const showCreator = () => {
		setListName(!listName)
	}

	const addList = (name, color) => {
		setIdCnt(idCnt + 1)
		if (color && name !== '') {
			let newList = {
				id: idCnt,
				name,
				color,
				tasks: []
			}

			setTaskLists([...taskLists, newList])
			showCreator()
		}
	}


	const removeList = (index) => {
		setTaskLists([...taskLists.filter(val => val !== taskLists[index])])

	}

	const logEnter = (userName, password) => {
		let theUser = {
			userName,
			password,
		}
		setUser(theUser)
		setLogedIn(!logedIn)
	}

	const regEnter = (data) => {
		let userData = {
			userName: data.userName,
			email: data.email
		}

		setUser(userData)
		setLogedIn(!logedIn)
	}

	useEffect(() => {
		
		const uploadData = () => {

			console.log('upload data');

			if (user.userName) {
				fetch(`db/${user.userName}`)
					.then(res => res.json())
					.then(data => {
						if (data) {
							console.log(data, 'resieved data');
							setTaskLists([...data.data])
							setLogedIn(true)
						}
						else {
							setTaskLists([])
							setLogedIn(false)
						}
					})
			}
		}
		uploadData()
	}, [user])


	useEffect(() => {
		
		const updateData = () => {
			console.log("updateData");

			if(taskLists.length>0){
				fetch('db/update', {
					headers: { "Accept": "application/json", "Content-Type": "application/json" },
					method: 'post',
					body: JSON.stringify({
						userName: user.userName,
						data: taskLists
					})
				}).then(res => res.json())
					.then((data) => console.log(data))
					.catch(err => { console.error(err) })
			}
		

		}

		updateData()
	}, [taskLists])



	const logout = () => {
		setUser({})
		setTaskLists([])
		setLogedIn(!logedIn)
	}

	const addTask = (task, id, index) => {
		let newTask
		if (task !== '') {
			newTask = {
				id,
				task,
				complete: false,
			}
			taskLists[index].tasks.push(newTask)
			setTaskLists([...taskLists])
		}
	}

	const removeTask = (listIndex, taskIndex) => {
		taskLists[listIndex].tasks = taskLists[listIndex].tasks.filter(task => task !== taskLists[listIndex].tasks[taskIndex])
		setTaskLists([...taskLists])
	}

	const doneTask = (listIndex, taskindex) => {
		taskLists[listIndex].tasks[taskindex].complete = !taskLists[listIndex].tasks[taskindex].complete
		setTaskLists([...taskLists])

	}



	return (
		<div className="App">
			<BrowserRouter>
				<div>
					{listName && <Creator addList={addList} showCreator={showCreator} />}
				</div>
				<Header showCreator={showCreator} logedIn={logedIn} logout={logout} />
				<Routes>
					<Route path='/' element={<Login logEnter={logEnter} />} />
					<Route path='/register' element={<Register regEnter={regEnter} />} />
					<Route path='/workspace' element={<Workspace
						setTaskLists={setTaskLists}
						removeList={removeList}
						removeTask={removeTask}
						taskLists={taskLists}
						addTask={addTask}
						doneTask={doneTask}
					/>} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
