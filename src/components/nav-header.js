import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = props => {
  return (
    <header className="flex flex-row justify-between items-center bg-light-green h3">
      <div className="ml2">
        <i className="f3 ion-log-out" /*onClick={e => props.auth.logout()}*/ />
      </div>
      <div>{props.title}</div>
      <div className="mr2" />
    </header>
  )
}

export default NavHeader
