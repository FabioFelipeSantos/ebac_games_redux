import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToTheCart: (state, action: PayloadAction<Game>) => {
      const gameAdded = action.payload

      if (state.items.find((game) => game.id === gameAdded.id)) {
        alert('The game selected has already been added to the cart!')
      } else {
        state.items.push(gameAdded)
      }
    }
  }
})

export const { addToTheCart } = cartSlice.actions
export default cartSlice.reducer
