import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Dropdown, Flex } from './components/UIBasic'
import Page from './components/Page'
import Product from './components/Product'
import { Button, Text } from './components/UIBasic'
import actions from './redux/actions'

class ProductHome extends React.Component {

  state = {
    sortby: 'title|desc',
  }

  componentDidMount() {
    const _sortby = localStorage.getItem('sortby')
    if (_sortby) this.setState({ sortby: _sortby })
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ sortby: value })
    localStorage.setItem('sortby', value);
  }

  handleClickAdd = () => {
    this.props.dispatch(actions.app.goto('ProductForm'));
  }

  handleClickItem = (item) => {
    this.props.dispatch(actions.app.goto('ProductSingle', item));
  }

  render() {
    const { products } = this.props;
    const [sortby, orderby] = this.state.sortby.split('|')

    return (
      <Page.Container>

        <Page.NavContent top="-18px">
          <Button radius='36px' width='36px' onClick={this.handleClickAdd}>+</Button>
        </Page.NavContent>

        <Page.Content>
          <Flex justifyContent='space-between' alignItems='center' padding="30px 0 10px 0">
            <div>{products.length} Results</div>
            <div>
              <Text inline margin='0 10px 0 0'>Sort By:</Text>
              <Dropdown onChange={this.handleChange} value={this.state.sortby}>
                <option value='title|desc'>Title: descending</option>
                <option value='title|asc'>Title: ascending</option>
                <option value='price|desc'>Price: hightest first</option>
                <option value='price|asc'>Price: lowest first</option>
                lowest price
              </Dropdown>
            </div>
          </Flex>

          <Product.List
            data={products}
            sortby={sortby}
            orderby={orderby}
            onClickItem={this.handleClickItem}
          />
        </Page.Content>

      </Page.Container>
    )
  }
}

ProductHome.propTypes = {
  dispatch: PropTypes.func,
  products: PropTypes.array,
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.data,
  }
}

export default connect(mapStateToProps, null)(ProductHome)
