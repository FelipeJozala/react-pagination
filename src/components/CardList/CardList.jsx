import React from 'react'
import Card from '../card/Card'

const CardList = ({currentItens}) => {
	return (
		<div>
			{currentItens.map(item => {
        return <Card key={item.id} item={item}/>
      })}
		</div>
	)
}

export default CardList