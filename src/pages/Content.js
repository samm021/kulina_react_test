import { Body, Header, Footer } from './index'
import { LocationModalProvider } from '../Context'
import { useSelector } from 'react-redux'

const Content = () => {
  const { cart } = useSelector(state => state.menu)

  return (
    <LocationModalProvider>
      <Header/>
      <Body/>
      {
        cart.length > 0
        ? <Footer/>
        : ''
      }
    </LocationModalProvider>
  )
}

export default Content
