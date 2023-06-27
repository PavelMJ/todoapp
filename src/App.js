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
	// const [idCnt, setIdCnt] = useState(1)
	const [listName, setListName] = useState(false)
	const [user, setUser] = useState({})
	const [logedIn, setLogedIn] = useState(false)
	const [allUsers, setAllUsers] = useState([])


	const AddUser = (userName, password, email) => {
		let newUser = {
			userName,
			password,
			email
		}
		setAllUsers([...allUsers, newUser])
	}

	const showCreator = () => {
		setListName(!listName)
	}


	const logEnter = (userName, password) => {
		let theUser = {
			userName,
			password,
		}
		setUser(theUser)
		setLogedIn(!logedIn)
	}

	// const regEnter = (data) => {
	// 	let userData = {
	// 		userName: data.userName,
	// 		email: data.email
	// 	}

	// 	setUser(userData)
	// 	setLogedIn(!logedIn)
	// }

	const regEnter = (userName, email) => {
		let userData = {
			userName,
			email,
		}

		setUser(userData)
		setLogedIn(!logedIn)
	}

	useEffect(() => {

		const uploadData = () => {

			console.log('upload data');

			// if (user.userName) {
			// 	fetch(`db/${user.userName}`)
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			if (data) {
			// 				console.log(data, 'resieved data');
			// 				setTaskLists([...data.data])
			// 				setLogedIn(true)
			// 			}
			// 			else {
			// 				setTaskLists([])
			// 				setLogedIn(false)
			// 			}
			// 		})
			// }
		}
		uploadData()
	}, [user])


	useEffect(() => {

		const updateData = () => {
			console.log("updateData");

			// if(taskLists.length>0){
			// 	fetch('db/update', {
			// 		headers: { "Accept": "application/json", "Content-Type": "application/json" },
			// 		method: 'post',
			// 		body: JSON.stringify({
			// 			userName: user.userName,
			// 			data: taskLists
			// 		})
			// 	}).then(res => res.json())
			// 		.then((data) => console.log(data))
			// 		.catch(err => { console.error(err) })
			// }


		}

		updateData()
	}, [taskLists])


	const logout = () => {
		setUser({})
		setTaskLists([])
		setLogedIn(!logedIn)
	}



	// const doneTask = (listIndex, taskindex) => {
	// 	taskLists[listIndex].tasks[taskindex].complete = !taskLists[listIndex].tasks[taskindex].complete
	// 	setTaskLists([...taskLists])

	// }



	return (
		<div className="App">
			<BrowserRouter>
				<div>
					{listName && <Creator showCreator={showCreator} />}
				</div>
				<Header showCreator={showCreator} logedIn={logedIn} logout={logout} />
				<Routes>
					<Route path='/' element={<Login logEnter={logEnter} />} />
					<Route path='/register' element={<Register regEnter={regEnter} AddUser={AddUser} />} />
					<Route path='/workspace' element={<Workspace
					/>} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
