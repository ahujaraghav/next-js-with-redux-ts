import React from 'react'
import protectedRoute from '../../src/hocs/ProtectedRoute';
import persistConnect from '../../src/hocs/persist-connect';
import { connect } from 'react-redux';

class AdminIndex extends React.Component {

  render() {
    return (
      <div style={{ padding: '5px' }}>
        <h6>Admin Home Page</h6>
        <img style={{ width: '200px' }} src="http://www.royalecash.com/wp-content/uploads/2017/10/AA.jpg" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.user.role
  }
}

export default connect(mapStateToProps)(protectedRoute(AdminIndex))