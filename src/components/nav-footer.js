import React from 'react'
import { Link } from 'react-router-dom'

const NavFooter = props => {
  return (
    <footer className="h3 flex flex-row justify-between items-center bg-light-green">
      <div className="ml4 white">
        <Link className="link black-80" to="/">
          <i className="db tc ion-person-stalker" />
          Logout
        </Link>
      </div>
      <div>
        <Link className="link black-80" to="/alerts">
          <i className="db tc ion-person" />
          Alerts
        </Link>
      </div>
      <div>
        <Link className="link black-80" to="/view-inventory">
          <i className="db tc ion-gear-b" />
          View Inventory
        </Link>
      </div>
      <div className="mr4">
        <Link className="link black-80" to="/order-report">
          <i className="db tc ion-stats-bars" />
          Order Report
        </Link>
      </div>
    </footer>
  )
}

export default NavFooter
