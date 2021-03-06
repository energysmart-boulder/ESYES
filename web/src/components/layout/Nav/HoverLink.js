import React from "react"
import styled from "styled-components"
import { Box, SvgTriangle } from "./styled"

const BoxContainer = styled.div`
  position: absolute;
  padding-top: 45px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const HoverLink = props => {
  return (
    <BoxContainer>
      <Box>
        <SvgTriangle />
        {props.children}
      </Box>
    </BoxContainer>
  )
}

export default HoverLink
