import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import actions from './redux/actions'
import Page from './components/Page'
import { Flex, Button, Box, Text } from './components/UIBasic'
import { moneyFormatter } from './utils/utils'

class ProductSingle extends React.Component {

  handleClickAdd = () => {
    this.props.dispatch(actions.app.goback());
  }

  handleEdit = () => {
    this.props.dispatch(actions.app.goto('ProductForm', { id: this.props.product.id }));
  }

  handleRemove = () => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.props.dispatch(actions.product.remove(this.props.product))
    }
  }

  render() {
    const { product } = this.props;

    return (
      <Page.Container>

        <Page.NavContent top="-18px">
          <Button radius='36px' width='36px' onClick={this.handleClickAdd}>{'<'}</Button>
        </Page.NavContent>

        <Page.Content>
          <Page.Header title={product.title} />
          <Flex>
            <Box xs='100%' sm='50%' padding="0 16px 16px 0">
              <Text color='#838383' fontSize="13px" padding="0">Price</Text>
              <Text>{moneyFormatter.format(product.price)}</Text>
              <Text color='#838383' fontSize="13px" padding="0">Description</Text>
              <Text nl2br>{product.description}</Text>
              <Button primary margin='0 8px 0 0' onClick={this.handleEdit}>Edit</Button>
              <Button onClick={this.handleRemove}>Remove</Button>
            </Box>
            <Box xs='100%' sm='50%' border='1px solid #e4e4e4' padding='30px' background='white' textAlign='center'>
              <img src={product.image_url} style={{ maxHeight: '320px' }} alt={product.title} />
            </Box>
          </Flex>
        </Page.Content>

      </Page.Container>
    )
  }
}

ProductSingle.propTypes = {
  dispatch: PropTypes.func,
  product: PropTypes.object,
}

const mapStateToProps = ({ view, products }) => {
  return {
    product: products.data.find(item => String(item.id) === String(view.params.id)),
  }
}

export default connect(mapStateToProps, null)(ProductSingle)
