import React from 'react'
import Tasklist from './Tasklist';
export default function Workspace({taskLists,removeList,updateList}) {

	
	return (
		<div className='Workspace'>
			
			<div className='flexRow'>
				
			</div>
			<div className='Content'>
				{taskLists.map((list, index) => {
					return <Tasklist
						removeList={removeList}
						key={list.id}
						index={index}
						list={list}
						updateList={updateList}

					/>
				})
				}
			</div>

		</div>
	)
}
