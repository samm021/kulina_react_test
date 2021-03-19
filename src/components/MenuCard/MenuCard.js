import Star from '@material-ui/icons/StarRounded'
import HalfStar from '@material-ui/icons/StarHalfRounded'
import Add from '@material-ui/icons/AddRounded'
import Dot from '@material-ui/icons/FiberManualRecordRounded'

import { Card, Container, Image, MainText, SubText, Header, Body, Footer, Button, StarIcon, DotIcon, AddIcon } from './Style'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/menuAction'


const MenuCard = ({ menu }) => {
  const dispatch = useDispatch()

  const fullStar = Math.floor(menu.rating)
  const halfStar = menu.rating - fullStar ? Math.ceil(menu.rating - fullStar) : 0
  const	reversedPrice = menu.price.toString().split('').reverse().join('')
	const rupiahPrice = reversedPrice.match(/\d{1,3}/g).join('.').split('').reverse().join('')

  const handleAddToCart = () => {
    dispatch(addToCart(menu))
  }

  return (
    <Card>
      <Image src={menu.imageURL} alt="Food"/>
      <Container>
        <Header>
          <SubText>{menu.rating}</SubText>
          <div>
          {
            [...Array(fullStar)].map((_, i) => <Star key={i} style={StarIcon}/>)
          }
          {
            halfStar
            ? <HalfStar style={StarIcon}/>
            : ''
          }
          </div>
        </Header>
        <Body>
          <MainText>{menu.name}</MainText>
          <SubText>by {menu.by} <Dot style={DotIcon}/> {menu.description}</SubText>
        </Body>
        <Footer>
          <MainText>Rp {rupiahPrice}</MainText>
          <Button onClick={handleAddToCart}>ADD<Add style={AddIcon}/></Button>
        </Footer>
      </Container>
    </Card>
  )
}

export default MenuCard
