const initState = {
  locations: {
    data: [
      {
        id: 1,
        name: 'Kulina',
        detail: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
      },
      {
        id: 2,
        name: 'Pancoran Riverside Apartement',
        detail: 'RT.6/RW.1, Pengadegan, Pancoran, South Jakarta'
      },
      {
        id: 3,
        name: 'Jalan Tulodong Atas 28',
        detail: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru'
      },
      {
        id: 4,
        name: 'Block71 Jakarta',
        detail: 'Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Jakarta'
      }
    ],
    loading: false,
    error: null
  },
  pickedLocation: {
    data: {}
  }
}

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PICK_LOCATION':
      return {
        ...state,
        pickedLocation: {
          data: action.payload
        }
      }
    default:
      return state
  }
}

export default locationReducer