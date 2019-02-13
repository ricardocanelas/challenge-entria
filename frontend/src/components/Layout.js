import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Flex, Grid, Button, Icon } from './UIBasic'

// ------
// Header

export const Header = (props) => {
  return (
    <StyledHeader>
      <Grid>
        <Flex>
          <Logo onClick={props.onClickLogo} />
        </Flex>
      </Grid>
    </StyledHeader>
  )
}

Header.propTypes = {
  onClickLogo: PropTypes.func,
}

const StyledHeader = styled.div`
  position: relative;
  background-color: white;
  border-bottom: 1px solid #E8E8E8;
  padding: 50px 0 50px 0;
`

// ----
// Logo

export const Logo = (props) => {
  return (
    <StyledLogo onClick={props.onClick}>
      <div className='logo'>Products</div>
      <div className='version'>beta</div>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  display: flex;
  cursor: pointer;
  .logo {
    display: inline-block;
    color: #2979FF;
    font-size: 23px;
    font-weight: bold;
  }
  .version {
    display: inline-block;
    color: #ACACAC;
    font-size: 12px;
  }
`

Logo.defaultProps = {
  onClick: () => { },
}

Logo.propTypes = {
  onClick: PropTypes.func,
}

// ------
// Footer

export const Footer = () => {
  return (
    <StyledFooter>
      <Grid>
        <Button as='a' transparent href='https://github.com/ricardocanelas'>
          <Icon github /> by ricardocanelas
        </Button>
      </Grid>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  position: relative;
  padding: 40px 0 10px 0;
  text-align: center;
  font-size: 13px;
`

