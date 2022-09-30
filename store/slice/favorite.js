import { createSlice } from '@reduxjs/toolkit'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    item: []

  },// gia trị ban đầu 
  reducers: {
    toggleFavorite: (state, action) => {
      const { id } = action.payload
      console.log('id', id)
      //ktra id có tồn tại hay ko find(tim kiem) nếu bằng loại bỏ ngc lại thêm mới
      const item = state.item.find(item => item === id)
      if (item) {
        state.item = state.item.filter(item => item !== id)
      } else {
        state.item = [...new Set([id, ...state.item])] // theem moiws
      }

    },// mở danh mục yêu thích
    removeFavorite: (state, action) => {
      const { id } = action.payload // lấy id
      const item = state.item.find(item => item === id)
      if (item) {
        state.item = state.item.filter(item => item !== id)
      } 
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorite,removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer