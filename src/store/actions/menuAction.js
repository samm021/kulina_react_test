const addToCart = payload => {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

export {
  addToCart
}