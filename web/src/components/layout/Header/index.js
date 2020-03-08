import React, { useState, useEffect } from "react"
import Grid from "../../containers/Grid"
import { graphql, StaticQuery } from "gatsby"
import { StyledHeader, LogoContainer, LogoLink } from "./styled"
import Nav from "../Nav"
import Img from "gatsby-image"
import slugify from "slugify"
import "./styles.css"

const query = graphql`
  query HeaderQuery {
    sanityHeader {
      logo {
        asset {
          fluid(maxWidth: 792) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      logoAlt
      ctaBtn {
        buttonText
        buttonDestination {
          pageName
        }
      }
      _rawTagLine
      headerLinks {
        linkList {
          linkChildren {
            _key
            linkName
            linkDestination {
              pageName
            }
          }
          linkName {
            linkName
            linkDestination {
              pageName
            }
          }
        }
      }
    }
  }
`

const Header = props => {
  const { toggleMenu, isMenuOpen, scrolled, location } = props
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityHeader.logo) {
          throw new Error(
            'Missing "Site Logo". Open the studio and add "Site Logo" Data'
          )
        }
        const testLink =
          data.sanityHeader.headerLinks.linkList[0].linkName.linkDestination
            .pageName

        return (
          <StyledHeader scrolled={scrolled} id="header">
            <Grid.Container>
              <LogoLink to="/" alt="Home">
                <LogoContainer scrolled={scrolled}>
                  <Img
                    fluid={data.sanityHeader.logo.asset.fluid}
                    alt={data.sanityHeader.logoAlt}
                  />
                </LogoContainer>
              </LogoLink>
              <Nav
                location={location}
                scrolled={scrolled}
                tagLine={data.sanityHeader._rawTagLine}
                ctaButton={data.sanityHeader.ctaBtn}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                navLinks={data.sanityHeader.headerLinks}
              />
            </Grid.Container>
          </StyledHeader>
        )
      }}
    />
  )
}

export default Header
