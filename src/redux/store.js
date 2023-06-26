import { configureStore } from '@reduxjs/toolkit'
import taskListsReducer from './taskSlice'


export const store = configureStore({
	reducer: {
		tasks: taskListsReducer,

	},
})