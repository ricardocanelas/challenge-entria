import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Grid, Box } from './UIBasic'

// ---------
// Container

export const Container = props => {
  return (
    <Grid>
      {props.children}
    </Grid>
  )
}

// ------
// Header

export const Header = props => {
  return (
    <StyledHeader>
      {props.title}
    </StyledHeader>
  )
}

Header.defaultProps = {
  title: 'Title',
}

Header.propTypes = {
  title: PropTypes.string,
}

const StyledHeader = styled.div`
  font-size: 18px;
  color: #606060;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0 10px 0;
  margin-bottom: 20px;
  margin-top: 36px;
`

// ---------
// NavContent

export const NavContent = props => {
  return (
    <StyledContainer {...props}>
      {props.children}
    </StyledContainer>
  )
}

NavContent.defaultProps = {
  top: '-12px;',
}

const StyledContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
`

// -------
// Content

export const Content = props => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  )
}

// --------------

export default {
  Container,
  Header,
  NavContent,
  Content,
}
