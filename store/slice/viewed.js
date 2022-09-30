import { createSlice } from '@reduxjs/toolkit'


export const viewedSlice = createSlice({
  name: 'favorite',
  initialState: {
    item: []

  },// gia trị ban đầu 
  reducers: {
    addnewproduct: (state, action)=> {
      const { id } = action.payload
      state.item = [...new Set([id, ...state.item])] //sinh ra mang mới ko bị trùng lập
    }

  },
})

// Action creators are generated for each case reducer function
export const {addnewproduct } = viewedSlice.actions

export default viewedSlice.reducer