import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { Button, Flex, GridItem } from './UIBasic';
import { FormGroup, FormInput, FormTextarea } from './Form'
import { moneyFormatter, dynamicSort } from '../utils/utils'

// ----
// Item

export const Item = props => {
  const data = props.data;

  return (
    <GridItem padding="5px">
      <StyledItem onClick={(e) => { props.onClick(data) }}>
        <div style={{ height:'150px', textAlign: 'center', boxSizing: 'border-box', padding: '16px 0' }}>
            <img src={data.image_url} style={{ height: '100%', maxWidth: '100%' }} alt={data.title} />
        </div>
        <div style={{ height:'84px', textAlign: 'center', padding:'10px 0' }}>
          <div><b>{data.title}</b></div>
          <div style={{ marginTop: '6px' }}>{moneyFormatter.format(data.price)}</div>
          </div>
      </StyledItem>
    </GridItem>
  )
}

Item.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
}

const StyledItem = styled.div`
  cursor: pointer;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  &:hover{
    box-shadow: 0 2px 6px #ececec;
  }
`

// ----
// List

export const List = props => {

  if (props.sortby !== null) {
    props.data.sort(dynamicSort(props.sortby, props.orderby));
  }

  return (
    <Flex
      justifyContent="flex-start"
      style={{ marginLeft: -5, marginRight: -5 }}
    >
      {props.data.map(item => (
        <Item key={item.id} data={item} onClick={props.onClickItem} />
      ))}
    </Flex>
  )
}

List.defaultProps = {
  data: [],
  sortby: null,
  orderby: 'DESC',
  onClickItem: () => {},
}

List.propTypes = {
  data: PropTypes.array,
  sortby: PropTypes.string,
  orderby: PropTypes.string,
  onClickItem: PropTypes.func,
}

// ----
// Form

const initialState = {
  id: null,
  title: '',
  price: '',
  image_url: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  price: Yup.number().positive().required('Required'),
  image_url: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
})

export const Form = props => {
  return (
    <Formik
      initialValues={props.data || initialState}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >

      {({ isSubmitting, handleSubmit, dirty }) => {

        return (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Field name="title" component={FormInput} />
            </FormGroup>

            <Flex>
              <FormGroup xs='100%' sm='50%' xs-p='0' sm-p='0 16px 0 0'>
                <Field name="price" type="number" component={FormInput} />
              </FormGroup>
              <FormGroup xs='100%' sm='50%'>
                <Field name="image_url" label="Image URL" component={FormInput} />
              </FormGroup>
            </Flex>

            <FormGroup>
              <Field name="description" component={FormTextarea} />
            </FormGroup>

            <FormGroup>
              <Button primary margin='0 8px 0 0' type='submit' disabled={!dirty || isSubmitting}>
                {isSubmitting && 'Saving..'}
                {!isSubmitting && 'Save'}
              </Button>
              <Button light onClick={props.onCancel} type='button' disabled={isSubmitting}>Cancel</Button>
            </FormGroup>

          </form>
        )
      }}
    </Formik>
  )
}

// -------------

export default {
  List,
  Item,
  Form,
}
