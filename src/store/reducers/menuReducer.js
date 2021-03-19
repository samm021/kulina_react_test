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
        imageURL: ''
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
        imageURL: ''
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
        imageURL: ''
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
        imageURL: ''
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
        imageURL: ''
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
        imageURL: ''
      }
    ],
    loading: false,
    error: null
  },
  cart: {
    data: [],
    loading: false,
    error: null
  }
}

const menuReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          data: [...state.cart.data, action.payload],
          loading: false,
          error: null
        }
      }
    default:
      return state 
  }
}

export default menuReducer