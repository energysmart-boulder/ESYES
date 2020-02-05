import styled from "styled-components"
import Button from "../../pieces/Button"

export const StyledButton = styled(Button)`
  justify-self: center;
  @media only screen and (min-width: 992px) {
    align-self: center;
    justify-self: start;
  }
`

export const SimpleCTAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  font-weight: bold;
  padding: 20px 10px 0 10px;
  @media only screen and (min-width: 600px) {
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: 68% 23.2%;
    grid-template-rows: 1fr;
    padding: 65px 30px 65px 35px;
    font-size: 27px;
    line-height: 35px;
  }
`

export const SimpleCTASection = styled.section``
