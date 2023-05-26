import { useState } from 'react';
import './App.css';
import Tasklist from './components/Tasklist';
import Creator from './components/Creator';
import Header from './components/Header';

function App() {
	const [taskLists, setTaskLists] = useState([{ name: 'My tasks', color:'#ce4cae' }])
	const [listName, setListName] = useState(false)


	  const createList= ()=>{
			setListName(!listName)
		}
		const addList = (name,color) => {
			if (color && name !=='') {
			let newList = {
				name,
				color,
				tasks:[]

			}
			setTaskLists([...taskLists, newList])
			setListName(!listName)

		}
	}
	const updateList=(task,index)=>{
		taskLists[index].tasks.push(task)
		setTaskLists([...taskLists])
	}
	

	return (
		<div className="App">
			<Header createList={createList} />
			<div>
				{listName && <Creator addList={addList} setListName={setListName} createList={createList}  />}
			</div>
			<div className='Content'>
			{taskLists.map((list, index) => {
				return <Tasklist
					key={index}
					index={index}
					list={list}
					updateList={updateList}
					
				/>
				})
			}
			</div>
			
		</div>
	);
}

export default App;
