import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArrowBack from '@material-ui/icons/ArrowBackRounded'
import ExpandMore from '@material-ui/icons/ExpandMoreRounded'
import DayButton from './DayButton'
import moment from 'moment'
import 'moment/locale/id';
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Nav = styled.div`
  background-color: white;
  position: sticky;
  top: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
`

const Header = styled.div`
  display: flex;
`

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`

const LocationButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
`

const AlamatPengantaran = styled.span`
  font-size: 8px;
  font-weight: 400;
  color: #6e7679;
`

const LocationText = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #424749;
  display: flex;
  align-items: center;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonLunch = styled.button`
  background-color: transparent;
  background-color: ${props => (props.selected ? 'transparent' : '#6e7679')};
  border: 1px solid #6e7679;
  border-right: none;
  color: ${props => (props.selected ? '#6e7679' : '#f1f1f2')};
  border-radius: 4px 0 0 4px;
  width: 100%;
  padding: 8px;
`

const ButtonDinner = styled.button`
  background-color: ${props => (props.selected ? '#6e7679' : 'transparent')};
  border: 1px solid #6e7679;
  border-left: none;
  color: ${props => (props.selected ? '#f1f1f2' : '#6e7679')};
  border-radius: 0 4px 4px 0;
  width: 100%;
  padding: 8px;
`

const StyledScrollBar = styled(PerfectScrollbar)`
  display: flex;
  margin: 16px 0;
`


const Navbar = (props) => {
  const [buttonSelected, setButtonSelected] = useState(false)
  const [datesForButton, setDatesForButton] = useState([])

  const handleLunchClick = () => {
    setButtonSelected(false)
  }

  const handleDinnerClick = () => {
    setButtonSelected(true)
  }

  useEffect(() => {
    moment.locale('id')
    let datesInIndonesia = []
    for (let i = 0; i < 14; i++) {
      datesInIndonesia.push({
        date : moment().add(i, 'days').format('Do'),
        day: moment().add(i, 'days').format('ddd'),
        dateNumber: moment().add(i, 'days').format('YYYYMMDD')
      })
    }
    setDatesForButton(datesInIndonesia)
    // eslint-disable-next-line
  }, [])

  return (
    <Nav>
      <Container>
        <Header>
          <BackButton>
            <ArrowBack/>
          </BackButton>
          <LocationButton>
            <AlamatPengantaran>ALAMAT PENGANTARAN</AlamatPengantaran>
            <LocationText>Tokopedia Tower <ExpandMore style={{fontSize: '20px', color: '#f9423a'}}/></LocationText>
          </LocationButton>
        </Header>
          <StyledScrollBar>
          {
            datesForButton.map((date, i) => {
              return <DayButton onClick={() => console.log(i)} key={i} date={date}/>
            })
          }
          </StyledScrollBar>
        <Footer>
          <ButtonLunch selected={buttonSelected} onClick={handleLunchClick}>Lunch</ButtonLunch>
          <ButtonDinner selected={buttonSelected} onClick={handleDinnerClick}>Dinner</ButtonDinner>
        </Footer>
      </Container>
    </Nav>
  )
}

export default Navbar
