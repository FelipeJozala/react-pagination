import React from 'react'
import { StyledCard } from './styles';

const Card = ({item}) => {
  return (
    <StyledCard>
      <span>{item.id}</span>
      <span> {item.title}</span>
    </StyledCard>
  )};
  
export default Card;