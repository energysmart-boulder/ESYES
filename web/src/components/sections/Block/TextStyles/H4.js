import styled from "styled-components"
import { typography } from "styled-system"

export const H4 = styled.h4`
  ${typography};
  color: ${props => props.theme.colors.primary};
  font-style: italic;
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }
  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 2000px) {
  }
`
