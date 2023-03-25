import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

export const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		loginUser: (state, action) => {},
	},
})

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer
