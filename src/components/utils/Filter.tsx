import React from 'react'
import styled from 'styled-components'

const StyledFilterButton = styled.button`
          background-color: hsl(180, 31%, 95%);
          color: hsl(180, 29%, 50%);
          font-size: .8rem;
          padding: 5px 5px;
          border: none;
          :hover {
            color:white;
            background-color: hsl(180, 29%, 50%);
            cursor: pointer;
          }
`
const Filter: React.FC<{text: string, action: (stringVar: string) => void}>  = ({text, action}) => {
  return (
    <StyledFilterButton onClick={()=>action(text)}>{text}</StyledFilterButton>
  )
}

export default Filter
