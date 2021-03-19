const pickLocation = payload => {
  return {
    type: 'PICK_LOCATION',
    payload
  }
}

export {
  pickLocation
}