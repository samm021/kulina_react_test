// STYLING FOR ELEMENTS

import styled from 'styled-components'

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(10, 31, 68, 0.1);
  border-radius: 8px;
  margin: 16px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 240px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`

const MainText = styled.span`
  font-weight: 700;
  color: #424749
`

const SubText = styled.span`
  color: #6e7679;
`
const Header = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
`

const Footer = styled.div`
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const Button = styled.button`
  font-weight: 700;
  background: #f9423a;
  color: #f1f1f2;
  padding: 6px 24px;
  border: 2px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
`

// STYLING FOR MATERIAL ICONS

const StarIcon = { 
  color: '#f9423a',
  fontSize: '20px'
}

const DotIcon = { 
  fontSize: '6px' 
}

const AddIcon = {
  fontSize: '20px'
}


export {
  Card,
  Container,
  Image,
  MainText,
  SubText,
  Header,
  Body,
  Footer,
  Button,
  StarIcon,
  DotIcon,
  AddIcon
}