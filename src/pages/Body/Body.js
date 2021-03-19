import { useSelector } from 'react-redux'
import { MenuCard } from '../../components/index'

const Body = () => {
  const { menus } = useSelector(state => state.menu)

  return (
    <>
     {
       menus.data.map(menu => {
         return <MenuCard key={menu.id} menu={menu}/>
       })
     }
    </>
  )
}

export default Body
