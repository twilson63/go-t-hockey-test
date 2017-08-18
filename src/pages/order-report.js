import React from 'react'
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'

const OrderReport = () => {
  return (
    <div>
      <NavHeader title="Go T Hockey Store Manager" target="/home" />
      <div>
        <h1>
          Order Report goes here
        </h1>
      </div>
      <NavFooter />
    </div>
  )
}

export default OrderReport
