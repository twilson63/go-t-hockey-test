import React from 'react'
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'
import { connect } from 'react-redux'
import { stickData } from '../get-stick-data'

class ViewInventory extends React.Component {
  componentDidMount() {
    this.props.dispatch(stickData)
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <NavHeader title="Go T Hockey Store Manager" target="/home" />
        <div>
          <h1>
            LIST INVENTORY HERE
          </h1>
        </div>
        <NavFooter />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sticks: state.sticks
  }
}

const connector = connect(mapStateToProps)

export default connector(ViewInventory)
