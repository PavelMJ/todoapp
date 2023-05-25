import { useState } from 'react';
import './App.css';
import Tasklist from './components/Tasklist';
import Creator from './components/Creator';

function App() {

	const [taskLists, setTaskLists] = useState([{ name: 'My tasks' }])
	const [listName, setListName] = useState(false)
	  const nameSetting = ()=>{
			setListName(!listName)
		}
		const addList = (name) => {
			if (name !=='') {
			let newList = {
				name,
			}
			setTaskLists([...taskLists, newList])
			setListName(!listName)

		}
	}

	return (
		<div className="App">
			<div>
				{listName && <Creator addList={addList} setListName={setListName} nameSetting={nameSetting}  />}
			</div>
			<div className='Content'>
			{taskLists.map((list, index) => {
				return <Tasklist
					key={index}
					index={index}
					list={list}
					
				/>
				})
			}
			</div>
			<button onClick={nameSetting} className='button3'>+</button>
		</div>
	);
}

export default App;
