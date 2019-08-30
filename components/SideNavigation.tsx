import React from 'react'
import Router from 'next/router';
import Link from 'next/link'

class SideNavigation extends React.Component<{ role: string }> {

  handleLogout = () => {
    Router.replace("/login")
  }

  render() {
    const role = this.props.role[0].toUpperCase() + this.props.role.slice(1, 5).toLowerCase()
    return (

      <div className="side-navigation">
        <div className="nav-list">
          <li className="nav-item active">
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <Link href={`/${this.props.role}`}><a style={{ color: 'white' }}>{role}</a></Link>
          </li>
          <li className="nav-item">
            <i className="fa fa-sign-in" aria-hidden="true"></i>
            <Link href="/login"><a style={{ color: 'white' }}>{this.props.role !== 'undefined' ? 'Logout' : 'Login'}</a></Link>
          </li>

        </div>





      </div>

    )
  }
}

export default SideNavigation