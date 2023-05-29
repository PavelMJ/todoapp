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
	const [user, setUser]=useState({})
	const [logedIn, setLogedIn]= useState(false)


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

	const updateList = (task, index) => {
		taskLists[index].tasks.push(task)
		setTaskLists([...taskLists])
	}

	const removeList = (index)=>{
		setTaskLists([...taskLists.filter(val => val !== taskLists[index])])

	}

	const logEnter = (user, password)=>{
		let theUser = {
			user,
			password,
		}
		setUser(theUser)
	}

	const regEnter = (data)=>{
		let userData = {
			userName:data.userName,
			email:data.email
		}

		setUser(userData)
	}

	useEffect(()=>{
		fetch(`db/${user.userName}`)
		.then(res=> res.json())
		.then(data=>{
			if(data){
				setTaskLists([...data])
			setLogedIn(true)}
			else{
				setTaskLists([])
				setLogedIn(false)
			}
		})
		
	},[user])


	const logout=()=>{
		setUser({})
	}






	return (
		<div className="App">
			<BrowserRouter>
				<div>
					{listName && <Creator addList={addList} showCreator={showCreator} />}
				</div>
				<Header showCreator={showCreator} logedIn={logedIn} logout={logout}/>
				<Routes>
					<Route path='/' element={<Login logEnter={logEnter} />} />
					<Route path='/register' element={<Register regEnter={regEnter} />} />
					<Route path='/workspace' element={<Workspace removeList={removeList} updateList={updateList} taskLists={taskLists} />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
