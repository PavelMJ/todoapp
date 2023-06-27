import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	taskLists: [],
}

export const counterSlice = createSlice({
	name: 'taskLists',
	initialState,
	reducers: {
		addList: (state, action) => {
			state.taskLists.push({
				id: new Date().toISOString(),
				name: action.payload.name,
				color: action.payload.color,
				tasks: []
			})

		},
		removeList: (state, action) => {
			state.taskLists = state.taskLists.filter(val => val !== state.taskLists[action.payload.index])
		},
		addTask: (state, action) => {
			if (action.payload.newTask !== '') {
				let newTask = {
					id: new Date().toISOString(),
					task: action.payload.newTask,
					complete: false,
				}
				state.taskLists[action.payload.index].tasks.push(newTask)

			}
		},
		removeTask: (state, action) => {
			state.taskLists[action.payload.listIndex].tasks = state.taskLists[action.payload.listIndex].tasks.filter(task => task !== state.taskLists[action.payload.listIndex].tasks[action.payload.taskIndex])
		},
		doneTask: (state, action) => {
			state.taskLists[action.payload.listIndex].tasks[action.payload.taskIndex].complete = !state.taskLists[action.payload.listIndex].tasks[action.payload.taskIndex].complete


		}
	},
})

export const { addList, removeList, addTask, removeTask, doneTask } = counterSlice.actions

export default counterSlice.reducer