import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Page from './components/Page'
import { Button } from './components/UIBasic'
import { Form } from './components/Product'
import actions from './redux/actions'

class ProductForm extends React.Component {

  handleClickBack = () => {
    this.props.dispatch(actions.app.goback());
  }

  handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    this.props.dispatch(actions.product.save(values))
      .then(() => {
        setSubmitting(false);
        this.props.dispatch(actions.app.goback());
      })
  }

  handleCancel = () => {
    this.props.dispatch(actions.app.goback());
  }

  render() {
    return (
      <Page.Container>

        <Page.NavContent top="-18px">
          <Button radius='36px' width='36px' onClick={this.handleClickBack}>{`<`}</Button>
        </Page.NavContent>

        <Page.Content>
          <Page.Header title={this.props.product ? 'Edit Product' : 'New Product'} />
          <Form
            onSubmit={this.handleSubmit}
            onCancel={this.handleCancel}
            data={this.props.product}
          />
        </Page.Content>

      </Page.Container>
    )
  }
}

ProductForm.propTypes = {
  dispatch: PropTypes.func,
  view: PropTypes.object,
  product: PropTypes.object,
}

const mapStateToProps = (state) => {
  const product = state.view.params.id
    ? state.products.data.find(item => String(item.id) === String(state.view.params.id))
    : null;

  return {
    view: state.view,
    product,
  }
}


export default connect(mapStateToProps, null)(ProductForm)
