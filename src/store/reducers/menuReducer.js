const initState = {
  menus: {
    data: [
      { 
        id: 1,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210325',
        imageURL: 'https://kln.imgix.net/production/W4MDU16C9M-Paket%20Nasi%20Lemak%20Paha%20Ayam%20Guling%20Taliwang.jpg?w=700'
      },
      { 
        id: 2,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210325',
        imageURL: 'https://kln.imgix.net/production/MINI-KETO.jpg'
      },
      { 
        id: 3,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210325',
        imageURL: 'https://kln.imgix.net/production/healthypc.jpg-2d20aa6f130d9cc16d63c876bca21992'
      },
      {
        id: 4,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210326',
        imageURL: 'https://kln.imgix.net/production/nusa-by-kafe-betawi.jpeg'
      },
      { 
        id: 5,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210326',
        imageURL: 'https://kln.imgix.net/production/Ayam%20suwir%20taliwang.jpg'
      },
      {
        id: 6,
        name: 'Roasted Chicken with Scrambled Egg',
        type: 'Lunch',
        by: 'Kulina',
        description: 'Uptown Lunch',
        rating: 4.5,
        price: 35000,
        day: '20210326',
        imageURL: 'https://kln.imgix.net/production/sangjasal%20korean.jpg'
      }
    ],
    loading: false,
    error: null
  },
  cart: []
}

const menuReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state 
  }
}

export default menuReducer