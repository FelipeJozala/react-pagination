import React from 'react'
import { StyledPaginator } from './style'

const PaginationList = ({pages, handlePagination}) => {

	return (
		<div>
			{Array.from(Array(pages), (item, index)=>{
        return <StyledPaginator key={index} onClick={() => handlePagination(Number(index))}>{index + 1}</StyledPaginator>
      })}
		</div>
	)
}

export default PaginationList