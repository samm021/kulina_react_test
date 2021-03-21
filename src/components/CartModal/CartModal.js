import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightRounded'
import { FloatingCart, FloatingLeftSide, FloatingRightSide, Header, Footer } from './Style'

const CartModal = () => {
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ totalPriceInRupiah, setTotalPriceInRupiah] = useState('')
  const { cart } = useSelector(state => state.menu)

  useEffect(() => {
    if (cart.length > 0) {
      setTotalPrice(totalPrice + cart[cart.length - 1].price)
    }
  }, [cart])

  useEffect(() => {
    const	reversedPrice = totalPrice.toString().split('').reverse().join('')
    setTotalPriceInRupiah(reversedPrice.match(/\d{1,3}/g).join('.').split('').reverse().join(''))
  }, [totalPrice])

  return (
    <FloatingCart>
        <FloatingLeftSide>
          <Header>{cart.length} Items | Rp {totalPriceInRupiah}</Header>
          <Footer>Termasuk ongkos kirim</Footer>
        </FloatingLeftSide>
        <FloatingRightSide>
          <ShoppingCartIcon style={{color: 'white'}} />
          <ArrowRightIcon style={{color: 'white'}}/>
        </FloatingRightSide>
    </FloatingCart>
  )
}

export default CartModal
