import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { responsive, media } from '@ricardocanelas/styled-responsive'

import IconHeart from '../assets/icon_heart.png'
import IconGithub from '../assets/icon_github.png'

// ----
// Box

const StyledBox = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  border: ${props => props.border};
  background: ${props => props.background};
  ${responsive('width')}
`

export const Box = props => {
  return (
    <StyledBox {...props}>
      {props.children}
    </StyledBox>
  )
}

Box.defaultProps = {
  padding: '0',
  textAlign: 'left',
  border: 'inherit',
  background: 'inherit',
}

Box.propTypes = {
  padding: PropTypes.string,
  textAlign: PropTypes.string,
  border: PropTypes.string,
  background: PropTypes.string,
}

// ----
// Grid

export const Grid = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  ${media('xs')`max-width: 100%; padding: 8px;`}
  ${media('sm')`max-width: 49em;`}
  ${media('md')`max-width: 65em;`}
  ${media('lg')`max-width: 76em;`}
`

// --------
// GridItem

export const GridItem = styled.div`
  box-sizing: border-box;
  padding: ${props => props.padding};
  ${responsive('width')}
`

GridItem.defaultProps = {
  xs: '100%',
  sm: '50%',
  md: '33.3%',
  lg: '25%',
  padding: '0',
}

Box.propTypes = {
  padding: PropTypes.string,
}

// ----
// Flex

const StyledFlex = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
  ${responsive('padding', 'padding')}
`

export const Flex = props => {
  return (
    <StyledFlex {...props}>
      {props.children}
    </StyledFlex>
  )
}

Flex.defaultProps = {
  direction: 'row',
  wrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
}

Flex.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
}

// --------
// Dropdown

const StyledDropdown = styled.select`
  padding: 8px 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
`

export const Dropdown = props => {
  return (
    <StyledDropdown {...props}>
      {props.children}
    </StyledDropdown>
  )
}

// ------
// Button

export const Button = props => {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  background-color: white;
  border: 1px solid #ccc;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props=> props.width};
  border-radius: ${props => props.radius};
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
    background-color: #f7f7f7;
    border-color: #adadad;
  }

  ${props => props.primary && `
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
  `}
  ${props => props.light && `
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
    &:hover {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }
  `}
  ${props => props.transparent && `
    color: #212529;
    background-color: transparent;
    border: inherit;
    &:hover {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }
  `}
  &:disabled,
  &[disabled]{
    cursor: no-drop;
    opacity: .65;
  }
`

Button.defaultProps = {
  padding: '8px 12px',
  width: 'auto',
  radius: '4px',
  primary: false,
  secondary: false,
}

Button.propTypes = {
  padding: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
}

// ----
// Text

const StyledText = styled(Box)`
  ${props=> props.inline && 'display: inline-block;'}
  ${props=> props.nl2br && 'white-space: pre-line;'}
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  line-height: ${props => parseInt(props.fontSize) + 8 + 'px'};
  margin: ${props => props.margin};
`

export const Text = props => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}

Text.defaultProps = {
  inline: false,
  nl2br: false,
  color: 'black',
  fontSize: '15px',
  padding: '0 0 10px 0',
  margin: '0',
}

Text.propTypes = {
  inline: PropTypes.bool,
  nl2br: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
}

// ----
// Text

const iconList = {
  heart: IconHeart,
  github: IconGithub,
}

export const Icon = (props) => {
  const icon = iconList[Object.keys(props)[0]]
  return (
    <img src={icon} style={{ verticalAlign:'middle', marginRight: '6px' }} />
  )
}
