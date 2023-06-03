import React from 'react'
import Tasklist from './Tasklist';
export default function Workspace({setTaskLists,taskLists,removeList,addTask, removeTask,doneTask}) {

	
	return (
		<div className='Workspace'>
			
			<div className='flexRow'>
				
			</div>
			<div className='Content'>
				{taskLists.map((list, index) => {
					return <Tasklist
					setTaskLists={setTaskLists}
						removeList={removeList}
						key={list.id}
						index={index}
						list={list}
						addTask={addTask}
						removeTask={removeTask}
						doneTask={doneTask}


					/>
				})
				}
			</div>

		</div>
	)
}
