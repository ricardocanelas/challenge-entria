import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from './redux/actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.product.all())
  }

  render() {
    const { status } = this.props
    console.log(this.props)

    if (status === null) return <div>Initializing..</div>
    if (status === 'loading') return <div>Loading..</div>
    if (status === 'error') return <div>Ops, something wrong happened.</div>

    return (
      <div className="App">
        Hello Entria!
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  status: PropTypes.any,
}

const mapStateToProps = ({ products }) => {
  return {
    status: products.status,
    list: products.data,
  }
}

export default connect(mapStateToProps, null)(App)
