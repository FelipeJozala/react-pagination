import React from 'react'
import { StyledCard } from './styles';

const Card = ({item}) => {
  return (
    <StyledCard>
      <p>{item.title}</p>
    </StyledCard>
  )};
  
export default Card;