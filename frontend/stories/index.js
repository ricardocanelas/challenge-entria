import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { products } from '../src/utils/api'
import { Box, Grid, GridItem, Flex, Dropdown, Button, Text, Icon } from '../src/components/UIBasic'
import { Header as LayoutHeader, Footer as LayoutFooter } from '../src/components/Layout'
import { FormGroup } from '../src/components/Form'
import Page from '../src/components/Page'
import Product from '../src/components/Product'
import theme from '../src/utils/theme'

const withThemeProvider = (storyFn) => {
  return (
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  )
}

// ------------------
//     UIBASIC
// ------------------

storiesOf('UIBasic|Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('custom', () => (
    <Box
      padding={text('padding', '5px 10px')}
      textAlign={text('textAlign', 'center')}
      border={text('border', '1px solid #ccc')}
      background={text('background', '#efefef')}
    >
      Hello Box
    </Box >
  ))

storiesOf('UIBasic|Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Grid>
      Hello Grid
    </Grid >
  ))
  .add('with GridItem', () => (
    <Grid>
      <Flex>
        <GridItem>
          <Box background='#efefef' padding='5px'>A (please resize the window)</Box>
        </GridItem>
        <GridItem>
          <Box background='#d0d0d0' padding='5px'>B</Box>
        </GridItem>
        <GridItem>
          <Box background='#b5b5b5' padding='5px'>C</Box>
        </GridItem>
        <GridItem>
          <Box background='#969696' padding='5px'>D</Box>
        </GridItem>
      </Flex>
    </Grid >
  ))

const optionDirection = 'row|row-reverse|column|column-reverse|initial|inherit'.split('|')
const optionWrap = 'nowrap|wrap|wrap-reverse|initial|inherit'.split('|')
const optionJustifyContent = 'flex-start|flex-end|center|space-between|space-around|initial|inherit'.split('|')
const optionAlignItems = 'stretch|center|flex-start|flex-end|baseline|initial|inherit'.split('|')
const optionAlignContent = 'stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit'.split('|')

storiesOf('UIBasic|Flex', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('custom', () => (
    <Grid>
      <Flex
        direction={select('direction', optionDirection, 'row')}
        wrap={select('wrap', optionWrap, 'wrap')}
        justifyContent={select('justifyContent', optionJustifyContent, 'space-around')}
        alignItems={select('alignItems', optionAlignItems, 'center')}
        alignContent={select('alignContent', optionAlignContent, 'center')}
      >
        <Box background='#efefef' padding='5px'>A</Box>
        <Box background='#e1e1e1' padding='5px'>B</Box>
        <Box background='#b5b5b5' padding='5px' xs='200px'>C</Box>
        <Box background='#969696' padding='5px' xs='300px'>D</Box>
        <Box background='#b5b5b5' padding='5px' xs='200px'>E</Box>
        <Box background='#e1e1e1' padding='5px'>F</Box>
        <Box background='#efefef' padding='5px'>G</Box>
      </Flex>
    </Grid >
  ))

storiesOf('UIBasic|Dropdown', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Dropdown>
      <option>Option A</option>
      <option>Option B</option>
    </Dropdown>
  ))

storiesOf('UIBasic|Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button>
      Click me
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      Disabled button
    </Button>
  ))
  .add('as <a href>', () => (
    <Button as='a' href='#'>
      I am an {`<a>`} element
    </Button>
  ))
  .add('custom', () => (
    <Button
      margin={text('margin', '32px 0 0 32px')}
      padding={text('padding', '32px 40px')}
      width={text('width', '180px')}
      radius={text('radius', '100px')}
    >
      Click me
    </Button>
  ))
  .add('primary', () => (
    <Button primary>
      Primary button
    </Button>
  ))
  .add('light', () => (
    <Button light>
      Light button
    </Button>
  ))
  .add('transparent', () => (
    <Button transparent>
      transparent button
    </Button>
  ))

storiesOf('UIBasic|Text', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Text>
      Hello World!
    </Text>
  ))

storiesOf('UIBasic|Icon', module)
  .addDecorator(withKnobs)
  .add('github', () => (
    <Icon github>
      Hello World!
    </Icon>
  ))
  .add('heart', () => (
    <Icon heart>
      Hello World!
    </Icon>
  ))

// ------------------
//     FORM
// ------------------

storiesOf('Form|FormGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <FormGroup>
      Default Group
    </FormGroup>
  ))
  .add('with fields', () => (
    <div>
      <FormGroup>
        <label>Field Name</label>
        <input />
      </FormGroup>
      <FormGroup>
        <label>TextArea Label</label>
        <textarea />
      </FormGroup>
      <FormGroup>
        <Button primary type='button'>Submit</Button>
      </FormGroup>
    </div>
  ))


// ------------------
//     LAYOUT
// ------------------

storiesOf('Layout|Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <LayoutHeader>
    </LayoutHeader>
  ))

storiesOf('Layout|Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <LayoutFooter>
    </LayoutFooter>
  ))


// ------------------
//     PAGE
// ------------------

storiesOf('Page|Content', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Page.Container>
      <Page.Content>
        My Content...
    </Page.Content>
    </Page.Container>
  ))
storiesOf('Page|Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Page.Container>
      <Page.Header title={text('title', 'Page Title')} />
    </Page.Container>
  ))

// ------------------
//     PRODUCT
// ------------------

storiesOf('Product|Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Product.Item data={products[0]} />
  ))

const optionSort = ['title', 'price', 'created_at']
const optionOrder = ['desc', 'asc']

storiesOf('Product|List', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Product.List data={products} />
  ))
  .add('with sort', () => (
    <Product.List
      data={products}
      sortby={select('sortby', optionSort, 'price')}
      orderby={select('orderby', optionOrder, 'desc')}
    />
  ))

storiesOf('Product|Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('default', () => (
    <Product.Form />
  ))
