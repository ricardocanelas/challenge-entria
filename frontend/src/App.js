import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from './components/Layout'
import ViewProductHome from './ViewProductHome.js'
import ViewProductForm from './ViewProductForm'
import ViewProductSingle from './ViewProductSingle'
import actions from './redux/actions'
import theme from './utils/theme'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.product.all())
  }

  handleClickLogo = () => {
    this.props.dispatch(actions.app.goto('ProductHome'))
  }

  render() {
    const { status } = this.props

    if (status === null) return <div>Initializing..</div>
    if (status === 'loading') return <div>Loading..</div>
    if (status === 'error') return <div>Ops, something wrong happened.</div>

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header onClickLogo={this.handleClickLogo} />
          {(!this.props.view.id || this.props.view.id === 'ProductHome') && <ViewProductHome />}
          {this.props.view.id === 'ProductForm' && <ViewProductForm />}
          {this.props.view.id === 'ProductSingle' && <ViewProductSingle />}
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  view: PropTypes.object,
  status: PropTypes.any,
  list: PropTypes.array,
}

const mapStateToProps = (state) => {
  return {
    view: state.view,
    status: state.products.status,
    list: state.products.data,
  }
}

export default connect(mapStateToProps, null)(App)
