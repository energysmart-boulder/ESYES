import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"

export const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-position: 25% 50%;
  height: 86.2vw;
  position: relative;
  z-index: 10;
  ${Container} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    min-width: 100%;
  }

  h1 {
    color: white;
    text-align: center;
    font-size: 1.9rem;
    line-height: 3rem;
    text-shadow: 0px 3px 6px #00000033;
    max-width: 23ch;
  }
  @media only screen and (min-width: 768px) {
    height: 54.69vw;
    h1 {
      font-size: 2.8125rem;
      line-height: 3.25rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 42.5vw;
  }

  @media only screen and (min-width: 2000px) {
  }
`

export const HeroButton = styled(Button)`
  position: relative;
  z-index: 10000;
  display: inline-flex;
  margin: 0 0.2rem;
  font-size: 13px;
  cursor: pointer;
  transition: all 250ms ease-in;
  border: 1px solid
    ${props =>
      props.secondary === "true"
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  background: ${props =>
    props.secondary === "true"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  :hover {
    color: ${props =>
      props.secondary === "true"
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    background-color: white;
  }
  @media only screen and (min-width: 350px) {
    max-width: 150px;
  }
  @media only screen and (min-width: 375px) {
    max-width: 156px;
  }
  @media only screen and (min-width: 410px) {
    margin: 0 1rem;
  }
  @media only screen and (min-width: 1024px) {
    min-width: 16.1vw;
    height: 3.75vw;
    font-weight: bold;
    font-size: 1.3vw !important;
    border-radius: 0.2vw;
  }
  @media only screen and (min-width: 2000px) {
    min-width: 322px;
    height: 70px;
    font-size: 27px;
    border-radius: 4px;
  }
`

export const HeroSection = styled.section``
