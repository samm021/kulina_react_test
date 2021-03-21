import { useState } from 'react'
import styled from 'styled-components'

const RoundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  padding: 0px 12px;
  background-color: ${props => (props.selected ?  '#6e7679' : 'transparent')};
  color: ${props => (props.selected ? '#f1f1f2' : '#6e7679')};
`

const DateText = styled.span`
  font-weight: 700;
`

const DayText = styled.span`
  font-size: 10px;
`

const DayButton = ({ date }) => {
  const [buttonSelected, setButtonSelected] = useState(false)

  const handleDateButtonClick = () => {
    setButtonSelected(!buttonSelected)
  }

  return (
    <>
      <RoundButton selected={buttonSelected} onClick={handleDateButtonClick}>
        <DayText>{date.day.toUpperCase()}</DayText>
        <DateText>{date.date}</DateText>
      </RoundButton>
    </>
  )
}

export default DayButton
