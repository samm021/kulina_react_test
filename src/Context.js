import { useState, createContext } from 'react'

const LocationModalContext = createContext()

const LocationModalProvider = props => {
  const [showLocationModal, setShowLocationModal] = useState(false)
  const locationModalValues = { showLocationModal, setShowLocationModal }

  return (
    <LocationModalContext.Provider value={locationModalValues}>
      {
        props.children
      }
    </LocationModalContext.Provider>
  )
}

export {
  LocationModalContext,
  LocationModalProvider
}