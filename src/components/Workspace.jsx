import React from 'react'
import Tasklist from './Tasklist';
import Hamburger from './Hamburger';
export default function Workspace({taskLists,removeList,updateList}) {

	
	return (
		<div className='Workspace'>
			
			<div className='flexRow'>
				<Hamburger />
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
