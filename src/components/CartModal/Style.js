import styled from 'styled-components'

const FloatingCart = styled.div`
  margin: 0 16px;
  background-color: #a23530;
  position: sticky;
  bottom: 16px;
  border-radius: 8px;
  padding: 8px 0px 8px 16px;
  display: flex;
  justify-content: space-between;
  color: #f1f1f2;
  align-items: center;
`

const FloatingLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const FloatingRightSide = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
`

const Header = styled.span`
  font-weight: 700;
`

const Footer = styled.span`
  font-size: 12px;
`

export {
  FloatingCart,
  FloatingLeftSide,
  FloatingRightSide,
  Header,
  Footer
}