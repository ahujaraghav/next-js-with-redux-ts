import React from 'react'
import persistConnect from '../../src/hocs/persist-connect';
import protectedRoute, { RouteCheck } from '../../src/hocs/ProtectedRoute';
import { connect } from 'react-redux';
import { StoreState } from '../../src/redux/config';

class SuperadminIndex extends React.Component {
  render() {
    return (
      <div style={{ padding: '5px' }}>
        <h6>Superadmin Home Page</h6>
        <img style={{ width: '200px' }} src="https://t5.rbxcdn.com/bf325e44c799e19a5d51015134a10c8c" />
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    role: state.user.role
  }
}

const routeCheck: RouteCheck = (state) => {
  return state.user.role === 'superadmin'
}

export default connect(mapStateToProps)(protectedRoute(SuperadminIndex, routeCheck))