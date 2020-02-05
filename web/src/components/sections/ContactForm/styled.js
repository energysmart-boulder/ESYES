import React from "react"
import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 10px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${props => props.theme.colors.black};
  @media only screen and (min-width: 600px) {
    min-width: 483px;
  }
  @media only screen and (min-width: 1310px) {
    min-width: 0px;
    height: 60px;
  }
`
export const StyledContactForm = styled.form`
  display: grid;
  grid-gap: 11px;
  width: 100%;

  div {
    display: grid;
    grid-template-columns: auto 85px;
    grid-gap: 11px;
    select {
      flex: 1;
      background-color: white;
      border: 1px solid ${props => props.theme.colors.black};
      border-radius: 4px;
      color: ${props => props.theme.colors.gray};
      padding: 12px 6px;
      cursor: pointer;
    }
    div {
      border: 1px solid ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.gray};
      min-width: 85px;
    }
  }
  input[type="submit"] {
    max-width: 270px !important;
    height: 60px;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    color: white;
    transition: all 200ms ease-in;
    margin: 0 auto;
    margin-top: 40px;
    align-self: center;

    cursor: pointer;
    :hover {
      background-color: white;
      color: ${props => props.theme.colors.secondary};
    }
  }
  @media only screen and (min-width: 600px) {
    justify-content: center;
  }
  @media only screen and (min-width: 1310px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
    input:nth-of-type(4) {
      grid-column: 1 / span 2;
    }
    div {
      max-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
    }
    div div {
      margin-left: 30px;
    }
    select {
      height: 60px;
    }
    input[type="submit"] {
      grid-column: 2;
      min-width: 397px;
      height: 71px;
      font-size: 25px;
    }
  }
`

export const ContactFormSection = styled.section`
  border-top: 3px solid ${props => props.theme.colors.primary};
  margin-top: 50.6px;
`

export const Brand = () => (
  <span>
    energy<span>smart</span>
  </span>
)

export const EnergySmart = styled(Brand)`
  span {
    color: ${props => props.theme.colors.primary};
    span {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

export const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: 800;
  }
  span span {
    color: ${props => props.theme.colors.secondary};
  }
  @media only screen and (min-width: 1310px) {
    font-size: 65px;
  }
`

export const PrivacyLink = styled.a`
  color: ${props => props.theme.colors.gray};
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  display: block;
  margin-top: 10px;
`
